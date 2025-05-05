"use client"; // Required for Framer Motion and styled-jsx

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Dummy team data
const teamMembers = [
  { id: 1, name: "Member One", title: "Lead Developer", imageUrl: "/bitan.jpg" },
  { id: 2, name: "Member Two", title: "UI/UX Designer", imageUrl: "/sayantani.jpg" },
  { id: 3, name: "Member Three", title: "Mobile Specialist", imageUrl: "/tanay.jpg" },
  { id: 4, name: "Member Four", title: "Backend Engineer", imageUrl: "/saheb.jpg" },
  { id: 5, name: "Member Five", title: "Project Manager", imageUrl: "/raja.jpg" },
];

// Animation variants
const memberVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Team = () => {
  return (
    <section id="team" className="teamSection">
      <div className="container">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.3 }}
           transition={{ duration: 0.6 }}
           className="titleContainer"
        >
          <h2 className="title">Our Experts</h2> {/* Different title */}
          <p className="description">
            Meet the talented individuals who bring creativity, expertise, and passion to every project.
          </p>
        </motion.div>

        <div className="grid">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              variants={memberVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              className="memberCard"
            >
              <div className="imageContainer">
                 <Image
                   src={member.imageUrl}
                   alt={member.name}
                   layout="fill"
                   objectFit="cover"
                   className="memberImage" // Class for targeting
                   sizes="(max-width: 640px) 9rem, 10rem" // Sizes hint for optimization
                 />
              </div>
              <h3 className="memberName">{member.name}</h3>
              <p className="memberTitle">{member.title}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- JSX Style Block for Team --- */}
      <style jsx>{`
        .teamSection {
          padding-top: 6rem;    /* More padding */
          padding-bottom: 6rem;
          padding-left: 1.5rem; /* Consistent padding */
          padding-right: 1.5rem;
          background-color: #f9fafb; /* Light gray background */
          border-top: 1px solid #e5e7eb; /* Subtle border */
        }
        .container {
           max-width: 80rem; /* Wider */
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
            color: #4b5563;
            max-width: 55rem;
            margin-left: auto;
            margin-right: auto;
        }
        .grid {
            display: grid;
            /* Flexible grid that fits items based on min size */
            grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr)); /* Adjust min size as needed */
            justify-content: center; /* Center the grid items */
            gap: 3rem 2rem; /* Row gap, Column gap */
            max-width: 64rem; /* Limit overall grid width to help centering */
            margin-left: auto;
            margin-right: auto;
        }
        .memberCard {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .imageContainer {
            position: relative;
            width: 9rem; /* Default size */
            height: 9rem;
            margin-bottom: 1.5rem; /* Increased space */
            border-radius: 50%;
            overflow: hidden;
             /* Enhanced shadow with white outline */
            box-shadow: 0 0 0 4px #ffffff, 0 6px 12px rgba(0, 0, 0, 0.15);
            transition: transform 0.3s ease;
        }
        .memberCard:hover .imageContainer {
            transform: scale(1.05); /* Slight scale on hover */
        }
        /* Target the img element rendered by next/image */
        .imageContainer :global(img.memberImage) {
            /* Styles are handled by layout="fill" objectFit="cover" */
        }

        .memberName {
            font-size: 1.1rem; /* Adjust size */
            font-weight: 600;
            color: #111827; /* Gray 900 */
            margin-bottom: 0.25rem; /* Less space */
        }
        .memberTitle {
            color: #4f46e5; /* Indigo 600 */
            font-size: 0.85rem; /* Adjust size */
            line-height: 1.4;
            font-weight: 500; /* Medium weight */
        }

        /* --- Responsiveness --- */
        @media (min-width: 640px) { /* sm */
            .title { font-size: 2.25rem; }
            .grid { grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr)); } /* Slightly larger base */
             .imageContainer { width: 10rem; height: 10rem; }
        }
         @media (min-width: 768px) { /* md */
             .title { font-size: 2.5rem; }
              /* Grid adapts automatically */
         }
        @media (min-width: 1024px) { /* lg */
             .teamSection { padding-left: 2rem; padding-right: 2rem; }
             /* Grid adapts automatically */
             /* .imageContainer { width: 10rem; height: 10rem; } */ /* Size is good */
        }
      `}</style>
    </section>
  );
};

export default Team;