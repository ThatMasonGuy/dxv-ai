// auth.js
import { auth, firestore } from './firebase';
import {
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import router from './router';
import { getFunctions, httpsCallable } from 'firebase/functions';

const functions = getFunctions();
const createUserCallable = httpsCallable(functions, 'createUser');

const googleProvider = new GoogleAuthProvider();

// Email validation regex
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Password validation regex
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#%^&/.,><';":])[A-Za-z\d@$!%*?&#%^&/.,><';":]{8,}$/;

onAuthStateChanged(auth, async (user) => {
    if (user) {
        try {
            const userDoc = doc(firestore, 'users', user.uid);
            const docSnap = await getDoc(userDoc);

            if (!docSnap.exists()) {
                await setDoc(userDoc, {
                    firstName: '',
                    lastName: '',
                    userName: '',
                    emailAddress: user.email,
                    phoneNumber: '',
                    dateOfBirth: '',
                    avatarUrl: '',
                });
            }

            const currentRoute = router.currentRoute.value;
            if (!currentRoute.meta.requiresAuth) {
                // Allow access to public routes
            } else if (currentRoute.meta.requiresAuth && !user) {
                router.push('/login');
            }
        } catch (error) {
            console.error('Error in onAuthStateChanged:', error);
        }
    } else {
        const currentRoute = router.currentRoute.value;
        if (currentRoute.meta.requiresAuth) {
            router.push('/login');
        }
    }
});

export const signUp = async (firstName, lastName, userName, email, phoneNumber, dateOfBirth, password, confirmPassword) => {
    try {
        console.log('Validating user input');
        // Validate email format
        if (!emailRegex.test(email)) {
            throw new Error('Invalid email format');
        }

        // Validate password format
        if (!passwordRegex.test(password)) {
            throw new Error('Password must be at least 8 characters long, contain at least 1 symbol, 1 number, 1 capital, and 1 lowercase letter');
        }

        // Validate password match
        if (password !== confirmPassword) {
            throw new Error('Passwords do not match');
        }

        // Validate date of birth (at least 12 years ago)
        const minDate = new Date();
        minDate.setFullYear(minDate.getFullYear() - 12);
        const birthDate = new Date(dateOfBirth);
        if (birthDate > minDate) {
            throw new Error('You must be at least 12 years old to sign up');
        }

        console.log('Trimming input fields');
        // Trim input fields
        firstName = firstName.trim();
        lastName = lastName.trim();
        userName = userName.trim();
        email = email.trim();
        phoneNumber = phoneNumber.trim();

        console.log('Calling createUser Cloud Function');
        // Call the Cloud Function to create the user
        const result = await createUserCallable({
            firstName,
            lastName,
            userName,
            emailAddress: email,
            phoneNumber,
            dateOfBirth,
            password,
        });

        console.log('User created successfully');
        router.push('/home');
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

export const signIn = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        router.push('/home');
    } catch (error) {
        console.error('Error signing in:', error);
        throw error;
    }
};

export const signInWithGoogle = async () => {
    try {
        const userCredential = await signInWithPopup(auth, googleProvider);
        const user = userCredential.user;
        const userDoc = doc(firestore, 'users', user.uid);
        const docSnap = await getDoc(userDoc);

        if (!docSnap.exists()) {
            await setDoc(userDoc, {
                firstName: '',
                lastName: '',
                userName: '',
                emailAddress: user.email,
                phoneNumber: '',
                dateOfBirth: '',
                avatarUrl: '',
            });
        }

        router.push('/home');
    } catch (error) {
        console.error('Error signing in with Google:', error);
        throw error;
    }
};

export const signOut = async () => {
    try {
        await auth.signOut();
        router.push('/login');
    } catch (error) {
        console.error('Error signing out:', error);
        throw error;
    }
};