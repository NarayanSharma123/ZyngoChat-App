import React from "react";

const AppInfo = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">ZyngoChat — App Information</h1>

      <section className="mb-6">
        <p className="text-gray-700 mb-2">
          ZyngoChat is a secure and lightweight messaging app developed and
          maintained by a single independent developer. It is designed to
          provide fast, private, and user-friendly communication for everyone.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Current Features</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>
            Create an account with your name, email, and password (optional
            profile image)
          </li>
          <li>Send instant text messages to your contacts</li>
          <li>Share photos and emojis in your chats</li>
          <li>Enjoy privacy with end-to-end encrypted conversations</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Security</h2>
        <p className="text-gray-700">
          Your passwords are securely protected using hashing algorithms and
          never stored in plain text. Only you and your chat partner can read
          your messages.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">App Details</h2>
        <p className="text-gray-700">
          Version: <strong>1.0.0.0</strong>
        </p>
        <p className="text-gray-700">
          Initial Release Date: <strong>August 8, 2025</strong>
        </p>
        <p className="text-gray-700">
          Developer: <strong>Independent / Solo Developer Project</strong>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Contact & Support</h2>
        <p className="text-gray-700">
          For support or questions, please visit the{" "}
          <strong>Help Center</strong> in the app or use the{" "}
          <strong>Contact</strong> option. As this is a solo-developed app,
          responses may take time, but all valid inquiries will be addressed.
        </p>
      </section>
    </div>
  );
};

export default AppInfo;
