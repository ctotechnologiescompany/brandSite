"use client"; // Required for Framer Motion and styled-jsx

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Dummy project data (with your Asset Management App)
const projects = [
  { id: 1, title: "Environment Education Program Management System", description: "A comprehensive platform connecting schools, government agencies, and the public to promote environmental awareness and sustainable practices.", imageUrl: "/eepweb.png" }, // Make sure asset.jpeg is in /public
  { id: 2, title: "tea Garden Survey App", description: "This project creates a digital system for conducting health and socio-economic surveys in Tea Garden communities.A React Native Android app allows field surveyors to collect detailed household and individual data offline, including health parameters (BP, Sugar, Malnutrition), scheme enrollment, GPS, photos, and signatures.", imageUrl: "/tea.png" },
  { id: 3, title: "Solid Waste Management", description: "Revolutionizing waste management with intelligent solutions for a cleaner, greener future.", imageUrl: "/swm.png" },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolioSection">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="titleContainer"
        >
          <h2 className="title">Featured Work</h2> {/* Different title */}
          <p className="description">
            Explore a selection of projects showcasing our expertise in creating impactful digital solutions.
          </p>
        </motion.div>

        <div className="grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <div className="imageContainer">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  // --- CHANGE IS HERE ---
                  objectFit="contain" // Changed from 'cover' to 'contain'
                  // --- END OF CHANGE ---
                  className="projectImage" // Class for targeting
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" // Sizes hint
                />
                 {/* Overlay might not look great with 'contain', consider removing or adjusting */}
                 {/* <div className="overlay"></div> */}
              </div>
              <div className="cardContent">
                <h3 className="cardTitle">{project.title}</h3>
                <p className="cardDescription">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- JSX Style Block for Portfolio --- */}
      <style jsx>{`
        .portfolioSection {
          padding-top: 6rem;
          padding-bottom: 6rem;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          background-color: #ffffff;
          border-top: 1px solid #f3f4f6;
        }
        .container {
           max-width: 80rem;
           margin-left: auto;
           margin-right: auto;
        }
        .titleContainer {
            text-align: center;
            margin-bottom: 4rem;
        }
        .title {
            font-size: 2rem;
            line-height: 1.3;
            font-weight: 700;
            color: #1f2937;
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
            grid-template-columns: repeat(1, minmax(0, 1fr));
            gap: 3rem;
        }
        .card {
            background-color: #ffffff;
            border-radius: 0.75rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
            overflow: hidden;
            transition: all 0.3s ease-in-out;
            /* Added to ensure cards have consistent height if desc varies */
            display: flex;
            flex-direction: column;
        }
         .card:hover {
             transform: translateY(-5px);
             box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
         }

        .imageContainer {
            position: relative;
            width: 100%;
            padding-bottom: 66.66%; /* Maintain aspect ratio 3:2 */
            overflow: hidden;
            background-color: #f3f4f6; /* Added background color for empty space */
        }
         /* Target the img element rendered by next/image */
         .imageContainer :global(img.projectImage) {
             position: absolute;
             top: 0;
             left: 0;
             width: 100%;
             height: 100%;
             /* --- CHANGE IS HERE IN CSS (alternative to prop, but prop is better) --- */
             /* object-fit: contain; */ /* Changed from 'cover' */
             /* --- END OF CHANGE --- */
             /* No transition needed on image itself now */
             /* transition: transform 400ms ease-in-out; */
        }
         /* Hover effect on container instead */
         .card:hover .imageContainer {
             /* Optional: slightly change background on hover if needed */
             /* background-color: #e5e7eb; */
         }

        /* Overlay: Removed as it usually doesn't pair well with object-fit: contain */
        /* .overlay { ... } */

        .cardContent {
            padding: 1.5rem 1.75rem;
            /* Added to make content area flexible */
            flex-grow: 1;
            display: flex;
            flex-direction: column;
        }
        .cardTitle {
            font-size: 1.15rem;
            font-weight: 600;
            color: #111827;
            margin-bottom: 0.6rem;
        }
        .cardDescription {
            color: #4b5563;
            font-size: 0.9rem;
            line-height: 1.6;
            /* Allow description to take remaining space */
            flex-grow: 1;
        }

        /* --- Responsiveness --- */
        @media (min-width: 640px) { /* sm */
             .title { font-size: 2.25rem; }
             .imageContainer { padding-bottom: 60%; } /* Adjust aspect ratio */
        }
         @media (min-width: 768px) { /* md */
            .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
             .title { font-size: 2.5rem; }
        }
        @media (min-width: 1024px) { /* lg */
            .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
            .portfolioSection { padding-left: 2rem; padding-right: 2rem; }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;