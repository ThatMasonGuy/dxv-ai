// src/utils/emailHelper.js
import { toast } from "vue-sonner";

export async function sendEmail(emailData) {
  try {
    const { name, email, message } = emailData;

    const emailContent = {
      to: "contact@dxv.ai",
      cc: email,
      subject: "Contact us form: dxv.ai",
      text: "",
      html: `
        <h2>${name}</h2>
        <h4>${email}</h4>
        <p>${message}</p>
      `,
    };

    const response = await fetch(
      "https://worker-shrill-morning-dd85.thatmasonguy.workers.dev/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailContent),
      }
    );

    if (!response.ok) {
      toast.error("Failed to send email request", {
        description: Error,
      });
      throw new Error("Failed to send email request");
    }

    const data = await response.json();
    console.log("Email request sent successfully:", data);
    toast.success("Email request sent successfully", {
      description:
        "Thank you for your request, we will get back to you shortly.",
    });
  } catch (error) {
    console.error("Error sending email request:", error);
    toast.error("Failed to send email request", {
      description: error.message,
    });
    throw error;
  }
}
