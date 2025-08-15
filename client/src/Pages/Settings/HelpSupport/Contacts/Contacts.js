import React from "react";

const Contacts = () => {
  return (
    <div className="my-6">
      {/* Section Heading */}
      <h3 className="text-2xl font-semibold text-gray-900 mb-1">Contacts</h3>
      <p className="text-sm text-gray-600 mb-3">
        We'd like to know your thoughts about this app.
      </p>

      {/* Action Link */}
      <a
        href="#"
        className="text-primary font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
      >
        Contact Us
      </a>

      {/* Divider */}
      <hr className="my-5 border-gray-300" />
    </div>
  );
};

export default Contacts;
