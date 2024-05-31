// functions/index.js
const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

console.log('Initializing Firebase Admin SDK');

exports.createUser = require('./createUser');

console.log('Exporting createUser function');