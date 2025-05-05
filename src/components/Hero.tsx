"use client"; // Required for Framer Motion, ParticleCanvas and styled-jsx

import React from 'react';
import { motion } from 'framer-motion';
import ParticleCanvas from './ParticleCanvas'; // Keep the particle canvas

const Hero = () => {
  return (
    <section id="home" className="heroSection">
      {/* Enhanced Background Shapes - Made Larger and Repositioned */}
      <div className="shape shape1"></div>
      <div className="shape shape2"></div>
      <div className="shape shape3"></div>

      {/* Particle Canvas */}
      <ParticleCanvas />

      {/* Content */}
      <div className="content">
        <motion.h1
          initial={{ opacity: 0, y: -40 }} // Slightly increased initial y
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="title"
        >
          XYZ Technologies
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }} // Slightly increased initial y
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="subtitle"
        >
          Building Digital Excellence: We craft the best websites and mobile apps for Android & iOS.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "backOut" }}
        >
          <a
            href="#contact"
            className="ctaButton"
          >
            Discuss Your Project
          </a>
        </motion.div>
      </div>

      {/* --- JSX Style Block --- */}
      <style jsx>{`
        .heroSection {
          position: relative; /* REQUIRED */
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          text-align: center;
          padding: 1.5rem; /* Increased base padding slightly */
          background: linear-gradient(120deg, #e0e7ff 0%, #c7d2fe 30%, #fef3c7 70%, #e0f2fe 100%);
        }

        /* --- Enhanced Abstract Shapes - Larger & Repositioned --- */
        .shape {
            position: absolute;
            border-radius: 50%;
            z-index: 1;
            animation: drift 20s infinite alternate ease-in-out;
        }

        .shape1 {
            width: 30rem; /* Larger */
            height: 30rem; /* Larger */
            top: -10rem; /* Adjusted */
            left: -15rem; /* Adjusted */
            background-color: rgba(165, 180, 252, 0.45);
            filter: blur(80px); /* Increased blur */
            opacity: 0.7;
            animation-duration: 23s;
        }
        .shape2 {
            width: 35rem; /* Larger */
            height: 35rem; /* Larger */
            bottom: -15rem; /* Adjusted */
            right: -18rem; /* Adjusted */
            background-color: rgba(167, 243, 208, 0.4);
            filter: blur(90px); /* Increased blur */
            opacity: 0.65;
            animation-duration: 19s;
            animation-delay: -6s;
        }
        .shape3 {
            width: 25rem; /* Larger */
            height: 25rem; /* Larger */
            bottom: 5%;  /* Adjusted */
            left: -5%;   /* Adjusted */
            background-color: rgba(254, 202, 202, 0.35);
            filter: blur(75px); /* Increased blur */
            opacity: 0.6;
            animation-duration: 26s;
            animation-delay: -11s;
        }

        /* Subtle drift animation */
        @keyframes drift {
            0% { transform: translate(0, 0) scale(1); }
            100% { transform: translate(30px, -25px) scale(1.08); } /* Slightly more movement */
        }


        /* Canvas is z-index 5 */
        /* Content Layering */
        .content {
          position: relative;
          z-index: 10; /* Above shapes and canvas */
          max-width: 60rem; /* Slightly increased max-width */
          margin-left: auto;
          margin-right: auto;
          padding: 2.5rem; /* Increased base padding */
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(4px); /* Slightly increased blur */
          border-radius: 16px; /* Slightly larger radius */
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12); /* Slightly stronger shadow */
        }

        /* --- Increased Text Sizes & Spacing --- */
        .title {
          font-size: 3rem;   /* Increased base size */
          line-height: 1.15; /* Adjusted line-height */
          font-weight: 800;
          color: #1e3a8a;
          margin-bottom: 1.75rem; /* Increased spacing */
          text-shadow: 0 1px 3px rgba(255, 255, 255, 0.35); /* Slightly stronger shadow */
        }

        .subtitle {
          font-size: 1.3rem; /* Increased base size */
          line-height: 1.6; /* Slightly adjusted */
          color: #374151;
          margin-bottom: 3rem; /* Increased spacing */
          max-width: 50rem;  /* Increased max-width */
          margin-left: auto;
          margin-right: auto;
        }

        /* Button Styling (Keep as is or adjust if needed) */
        .ctaButton {
          display: inline-block;
          padding: 1rem 2.75rem; /* Slightly larger padding */
          background-color: #4338ca;
          color: #ffffff;
          font-weight: 600;
          font-size: 1.05rem; /* Slightly larger font */
          border-radius: 0.5rem;
          box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.15);
          text-decoration: none;
          transition: all 300ms ease;
          border: 1px solid transparent;
        }

        .ctaButton:hover {
          background-color: #3730a3;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.2);
          text-decoration: none;
          color: #ffffff;
        }

        /* --- Responsiveness with Larger Sizes --- */
        @media (min-width: 640px) { /* sm */
          .title {
              font-size: 4rem; /* Increased */
          }
          .subtitle {
              font-size: 1.5rem; /* Increased */
          }
          .content { padding: 3rem; } /* Increased padding */
        }

        @media (min-width: 768px) { /* md */
          .title {
              font-size: 5rem; /* Increased */
          }
           .subtitle {
              font-size: 1.75rem; /* Increased */
               line-height: 1.65;
          }
           .content { padding: 3.5rem; } /* Increased padding */
        }
        @media (min-width: 1024px) { /* lg */
           .title {
              font-size: 5.5rem; /* Increased */
              line-height: 1.1;
          }
           .subtitle {
              font-size: 1.9rem; /* Increased */
              line-height: 1.7;
          }
          .content { padding: 4rem; } /* Increased padding */
        }
         @media (min-width: 1280px) { /* xl */
           .title {
              font-size: 6rem; /* Further Increase */
          }
           .subtitle {
              font-size: 2rem; /* Further Increase */
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;