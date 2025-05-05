"use client"; // Required for styled-jsx

import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>© {currentYear} XYZ Technologies. All Rights Reserved.</p>
      </div>

      {/* --- JSX Style Block for Footer --- */}
      <style jsx>{`
        .footer {
          background-color: #111827; /* Darker Gray 900 */
          color: #9ca3af; /* Lighter Gray 400 */
          padding-top: 2rem; /* More padding */
          padding-bottom: 2rem;
          border-top: 1px solid #374151; /* Gray 700 border */
        }
        .container {
          max-width: 80rem; /* Wider */
          margin-left: auto;
          margin-right: auto;
          padding-left: 1.5rem; /* Consistent padding */
          padding-right: 1.5rem;
          text-align: center;
        }
        p {
           margin: 0; /* Remove default paragraph margin */
           font-size: 0.875rem; /* text-sm */
        }

        /* --- Responsiveness (padding handled by container) --- */
        /* No specific media queries needed for this simple footer */
      `}</style>
    </footer>
  );
};

export default Footer;