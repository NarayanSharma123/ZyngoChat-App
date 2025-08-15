import React from "react";

export default function HelpCenter() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">ZyngoChat — Help Center</h1>
      <p className="mb-6">
        Welcome to the ZyngoChat Help Center. This page is designed to help you
        understand how to use ZyngoChat, troubleshoot common issues, and learn
        about the features currently available. ZyngoChat is developed and
        maintained by a single developer, so information here reflects the
        current version of the app. Updates will be made as new features are
        added.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Getting Started</h2>
      <p>
        <strong>Download and Install:</strong> Download ZyngoChat from the
        official app store or a trusted link provided by the developer. Install
        it on your device.
      </p>
      <p>
        <strong>Sign Up:</strong> On the Sign Up screen, enter your First Name,
        Last Name, Email, and Password. You may optionally upload a profile
        image. Click "Create Account" to complete registration.
      </p>
      <p>
        <strong>Login:</strong> If you already have an account, go to the Login
        screen, enter your Email and Password, and click "Login."
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Account & Privacy</h2>
      <p>
        Your privacy matters to us. Passwords are stored securely using hashing
        methods and are never saved in plain text. Chats are end-to-end
        encrypted, meaning only you and your chat partner can read them.
      </p>
      <p>
        <strong>Logout:</strong> While logged in, go to your Dashboard page.
        Click the three-dot icon next to your profile, choose "Settings," open
        the Account tab, and scroll down to find the "Logout" button. Clicking
        this will log you out and return you to the login page.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Messages & Media</h2>
      <p>
        <strong>Sending Messages:</strong> Open a chat, select a contact, type
        your message, and press send.
      </p>
      <p>
        <strong>Using Emojis:</strong> Tap the emoji icon next to the typing box
        to add emojis to your message.
      </p>
      <p>
        <strong>Sending Photos:</strong> Tap the media icon in a chat, select a
        photo from your gallery, and send it. Currently, video and document
        sharing is not available but may be added in the future.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Troubleshooting</h2>
      <p>
        <strong>Login Issues:</strong> Check your internet connection, ensure
        your email and password are correct. If issues persist, contact support
        via the Contact page.
      </p>
      <p>
        <strong>App Not Loading:</strong> Restart your phone and try again. If
        the issue continues, uninstall and reinstall the app.
      </p>
      <p>
        <strong>Media Upload Problems:</strong> Check your internet speed and
        device storage. Ensure the file size is not too large.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Security Tips</h2>
      <ul className="list-disc list-inside">
        <li>Never share your password with anyone.</li>
        <li>Be cautious when using public or unsecured Wi-Fi.</li>
        <li>Only download ZyngoChat from official sources.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Contact Support</h2>
      <p>
        If you encounter bugs, issues, or have questions about features, reach
        out via the Contact page in ZyngoChat. As the app is managed by a single
        developer, responses may take time, but all valid inquiries will be
        considered.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Upcoming Features</h2>
      <ul className="list-disc list-inside">
        <li>Voice and Video Calling</li>
        <li>Group Chats</li>
        <li>File Sharing (PDF, videos, documents)</li>
        <li>Notification Controls</li>
        <li>Block and Report System</li>
      </ul>
      <p>
        When these features are added, the Help Center will be updated
        accordingly.
      </p>
    </div>
  );
}
