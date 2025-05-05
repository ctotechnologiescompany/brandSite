"use client"; // Required for Framer Motion and styled-jsx

import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="contactSection">
      <div className="container">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.3 }}
           transition={{ duration: 0.6 }}
           className="titleContainer"
        >
          <h2 className="title">Ready to Start Your Project?</h2> {/* Changed title */}
          <p className="description">
            Let's discuss how XYZ Technologies can bring your vision to life. Reach out today!
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.5 }}
           className="contactBox"
        >
            <h3 className="boxTitle">Get In Touch</h3> {/* Changed title */}
            <p className="contactInfo">
                <span className="infoLabel">Email:</span>{' '}
                <a href="mailto:hello@xyztechnologies.com" className="contactLink">
                technologiescompany3@gmail.com
                </a>
            </p>
            <p className="contactInfo last">
                <span className="infoLabel">Phone:</span>{' '}
                <a href="tel:+1234567890" className="contactLink"> {/* Replace with actual number */}
                    +91 6291 507 905
                </a>
            </p>
            <a
              href="technologiescompany3@gmail.com"
              className="ctaButton"
            >
             Send Us an Email
           </a>
        </motion.div>
      </div>

      {/* --- JSX Style Block for Contact --- */}
      <style jsx>{`
        .contactSection {
          padding-top: 6rem;    /* More padding */
          padding-bottom: 6rem;
          padding-left: 1.5rem; /* Consistent padding */
          padding-right: 1.5rem;
          /* Subtle gradient */
          background: linear-gradient(to bottom, #ffffff, #f3f4f6 90%); /* White to Gray 100, fade later */
           border-top: 1px solid #e5e7eb; /* Subtle border */
        }
        .container {
           max-width: 60rem; /* Slightly narrower */
           margin-left: auto;
           margin-right: auto;
        }
        .titleContainer {
            text-align: center;
            margin-bottom: 4rem; /* More space */
        }
        .title {
            font-size: 2rem;
            line-height: 1.3;
            font-weight: 700;
            color: #1f2937; /* Dark Gray */
            margin-bottom: 1rem;
        }
        .description {
            font-size: 1.1rem;
            line-height: 1.75;
            color: #4b5563; /* Gray 600 */
            max-width: 55rem;
            margin-left: auto;
            margin-right: auto;
        }
        .contactBox {
            background-color: #ffffff;
            padding: 2.5rem 3rem; /* More padding */
            border-radius: 0.75rem; /* More rounded */
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08); /* Slightly softer shadow */
            text-align: center;
            border: 1px solid #e5e7eb; /* Subtle border */
        }
        .boxTitle {
            font-size: 1.5rem; /* text-2xl */
            line-height: 1.5;
            font-weight: 600;
            color: #111827; /* Gray 900 */
            margin-bottom: 2rem; /* More space */
        }
        .contactInfo {
            color: #374151; /* gray-700 */
            margin-bottom: 1rem; /* Increased space */
            font-size: 1.1rem; /* Slightly larger */
        }
        .contactInfo.last {
             margin-bottom: 2.5rem; /* More space before button */
        }
        .infoLabel {
            font-weight: 500; /* font-medium */
        }
        .contactLink {
            color: #4f46e5; /* text-indigo-600 */
            text-decoration: none;
            transition: color 150ms ease-in-out, text-decoration 150ms ease-in-out;
        }
        .contactLink:hover {
            color: #3730a3; /* Darker indigo */
            text-decoration: underline;
        }
        .ctaButton {
          display: inline-block;
          padding: 0.875rem 2.5rem; /* Match Hero button */
          background-color: #4f46e5; /* Indigo 600 */
          color: #ffffff;
          font-weight: 600;
          font-size: 1rem;
          border-radius: 0.5rem;
          box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.1); /* Subtle shadow */
          text-decoration: none;
          transition: all 300ms ease;
          border: 1px solid transparent;
        }
        .ctaButton:hover {
          background-color: #4338ca; /* Darker Indigo */
          transform: translateY(-2px);
          box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.15);
          text-decoration: none;
          color: #ffffff;
        }

        /* --- Responsiveness --- */
         @media (min-width: 640px) { /* sm */
             .title { font-size: 2.25rem; }
         }
         @media (min-width: 768px) { /* md */
             .title { font-size: 2.5rem; }
         }
         /* Container size controls width, box adapts */
      `}</style>
    </section>
  );
};

export default Contact;