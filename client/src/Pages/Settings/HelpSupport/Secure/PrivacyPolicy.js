import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center py-10">
      <main className="w-full max-w-3xl bg-white shadow-sm rounded-lg p-8 mx-4">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-900">
            ZyngoChat - Privacy Policy
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Last updated: August 8, 2025
          </p>
        </header>

        <article className="text-gray-800 leading-7 space-y-5 text-justify">
          <p>
            At <strong>ZyngoChat</strong>, your privacy matters a lot to us. The
            purpose of this Privacy Policy is to explain clearly and simply how
            we collect your data, how we use it, and how we keep it safe. This
            policy applies when you use ZyngoChat.
          </p>

          <h2 className="text-xl font-medium">
            1. Who created it and responsibility
          </h2>
          <p>
            ZyngoChat was created by a single individual — not by a team or
            company. If you have any questions or concerns related to this
            policy, you can contact us. (The Contact page link will be provided
            in the app’s UI.)
          </p>

          <h2 className="text-xl font-medium">2. Information we collect</h2>
          <p>
            When you sign up, we ask for some basic information necessary to run
            the service:
          </p>
          <ul className="list-disc pl-6">
            <li>First name, Last name</li>
            <li>Email address</li>
            <li>Phone number (required for account)</li>
            <li>
              Password (stored on the server in hashed form — not in clear text)
            </li>
            <li>Profile image (if you upload one)</li>
          </ul>

          <h2 className="text-xl font-medium">
            3. Handling of messages and content
          </h2>
          <p>
            Your messages in ZyngoChat are end-to-end encrypted. This simply
            means that only the sender and the receiver can read them. We (the
            developer) or any third party do not read your plain-text messages.
            For delivery purposes, some message data may be temporarily stored
            on the server in encrypted form (for example, if the recipient is
            offline) — if the message is not delivered within 30 days, we delete
            it.
          </p>

          <h2 className="text-xl font-medium">4. Media and file sharing</h2>
          <p>
            You can share photos on ZyngoChat. In future updates, we will add
            features to send voice messages, videos, PDFs, and other file types.
            When you upload media, it may be stored on secure servers or
            third-party storage (like Cloudinary) to make delivery and streaming
            easier. We work only with third-party services that process your
            data according to our instructions.
          </p>

          <h2 className="text-xl font-medium">
            5. Contacts, invites, and groups
          </h2>
          <p>
            ZyngoChat will give you the option to import your phone contacts so
            you can easily connect with people already using the app. If a
            contact is not on ZyngoChat, you can send them an invite message
            through the app. The group creation feature (group name, about, add
            members) will also come in future updates; messages shared in groups
            will also be encrypted.
          </p>

          <h2 className="text-xl font-medium">
            6. Security — password hashing and encryption
          </h2>
          <p>
            Your password is never stored in plain text. We secure it using a
            strong hashing algorithm. Messages remain end-to-end encrypted —
            ZyngoChat’s design goal is maximum user privacy. We follow security
            best practices on both the server and client side (such as HTTPS,
            secure storage, input validation) and will keep updating the app to
            patch vulnerabilities.
          </p>

          <h2 className="text-xl font-medium">7. Third-party services</h2>
          <p>
            To run certain features, we use trusted third-party services — for
            example, Firebase for authentication and Cloudinary for media
            storage. These services may access limited technical metadata
            necessary for their work (such as file size, mime type, and storage
            location). We do not grant these third parties permission to read
            your personal content, and we expect them to handle data according
            to our privacy standards.
          </p>

          <h2 className="text-xl font-medium">
            8. How we use your information
          </h2>
          <p>We use your information for the following purposes:</p>
          <ul className="list-disc pl-6">
            <li>
              Running core chat features (message delivery, media transfer)
            </li>
            <li>Account recovery and user authentication</li>
            <li>
              Support and bug fixes — when you send a support request, you may
              share relevant message copies
            </li>
            <li>
              Safety and integrity checks — detecting spam, abuse, or illegal
              activity
            </li>
          </ul>

          <h2 className="text-xl font-medium">9. Who we may share data with</h2>
          <p>
            We do not share your data openly without your permission. The only
            exceptions are:
          </p>
          <ul className="list-disc pl-6">
            <li>
              Service providers — such as hosting and storage partners that
              perform technical work for us
            </li>
            <li>
              Legal reasons — if required by law or government request, or to
              prevent a serious security incident
            </li>
            <li>
              Business transfers — if the company is sold, data may be
              transferred to the new owner in accordance with applicable law
            </li>
          </ul>

          <h2 className="text-xl font-medium">10. Your rights</h2>
          <p>You have the following basic rights:</p>
          <ul className="list-disc pl-6">
            <li>
              Right to view account information — check and edit your profile
              from Settings
            </li>
            <li>
              Right to delete your account — if you delete your account, we will
              delete any data no longer necessary (note: other users may still
              have copies of messages you sent)
            </li>
            <li>
              Contact/block controls — you can block someone so they cannot
              message you
            </li>
          </ul>

          <h2 className="text-xl font-medium">
            11. Data retention and deletion
          </h2>
          <p>
            We keep your data for as long as necessary to operate the service,
            meet legal obligations, or prevent abuse. If you delete your
            account, we delete any data that is no longer needed. However,
            messages already delivered to your contacts will remain on their
            devices until they delete them.
          </p>

          <h2 className="text-xl font-medium">12. Children’s use</h2>
          <p>
            To sign up for ZyngoChat, a user must be at least 13 years old (or
            the legal minimum in your country). If you are a minor, your
            parent/guardian must accept the terms.
          </p>

          <h2 className="text-xl font-medium">13. Updates to policy</h2>
          <p>
            We may update our Privacy Policy from time to time. For significant
            changes, we will provide notice in the app or via your contact
            details. You can also send suggestions through the Contact page.
          </p>

          <h2 className="text-xl font-medium">14. Legal and liability</h2>
          <p>
            ZyngoChat is provided on an "as is" basis. We strive to keep the
            service reliable and secure but do not guarantee it will always work
            perfectly. Our liability will remain limited as permitted by
            applicable law.
          </p>

          <h2 className="text-xl font-medium">15. Contact</h2>
          <p>
            If you have any questions about the policy or data practices, you
            can reach us via the Contact page in the app. ZyngoChat is an
            independent project; contact details will be provided in the app’s
            Contact section.
          </p>

          <p className="text-sm text-gray-600">
            <em>
              Note: This Privacy Policy is based on ZyngoChat’s current features
              (chat, emoji, photo sending) and planned features. As new features
              (voice/video calls, file sharing, groups, contact invites) are
              introduced, we will update the policy accordingly.
            </em>
          </p>

          <div className="mt-6 text-right text-sm text-gray-700">
            Thank you — ZyngoChat
          </div>
        </article>
      </main>
    </div>
  );
}
