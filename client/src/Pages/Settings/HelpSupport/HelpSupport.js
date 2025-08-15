import React from "react";
import Contacts from "./Contacts/Contacts";
import PrivacyPolicy from "./Secure/PrivacyPolicy";
import Terms from "./Secure/Terms";
import { Link } from "react-router-dom";

const HelpSupport = () => {
  return (
    <div className="my-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Help & Support</h2>
        <p>Need assistance? Visit our Help Center or contact support.</p>
        <hr />
      </div>

      {/* contacts */}
      <Contacts />

      {/* other links */}
      <div className="mt-4">
        <ul className="space-y-2">
          <Link
            to="/app/help"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded block"
          >
            <li>Help Center</li>
          </Link>

          <Link
            to="/app/licenses"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded block"
          >
            <li>Licenses</li>
          </Link>
          <Link
            to="/app/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded block"
          >
            <li>Terms & Conditions</li>
          </Link>
          <Link
            to="/app/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded block"
          >
            <li>Privacy Policy</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default HelpSupport;
