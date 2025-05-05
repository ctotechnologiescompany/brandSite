"use client"; // Required for Framer Motion and styled-jsx

import React from 'react';
import { motion } from 'framer-motion';
// Import Icons
import { FaLaptopCode, FaApple } from 'react-icons/fa'; // Using FaApple for iOS
import { IoLogoAndroid } from "react-icons/io"; // Specific Android Icon
import { HiOutlinePaintBrush } from "react-icons/hi2"; // Different Palette icon

// Animation variants for staggering children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // Slightly increased stagger
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 }, // Start further down and slightly smaller
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
        type: "spring", // Use spring physics
        stiffness: 100,
        damping: 15,
        duration: 0.6
    }
  },
};

const About = () => {
  const services = [
    {
      id: "web", // Unique ID for styling/keys
      title: "Website Development",
      description: "Creating responsive, high-performance websites tailored to your brand.",
      icon: <FaLaptopCode size={30} className="icon-service icon-web" /> // Slightly smaller icon size
    },
    {
      id: "android",
      title: "Android App Development",
      description: "Building native Android applications with seamless user experiences.",
      icon: <IoLogoAndroid size={34} className="icon-service icon-android" />
    },
    {
      id: "ios",
      title: "iOS App Development",
      description: "Developing elegant and robust applications for the Apple ecosystem.",
      icon: <FaApple size={34} className="icon-service icon-ios" />
    },
    {
      id: "design",
      title: "UI/UX Design",
      description: "Designing intuitive and beautiful interfaces that users love.",
      icon: <HiOutlinePaintBrush size={30} className="icon-service icon-design" />
    },
  ];

  return (
    <section id="about" className="aboutSection">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -30 }} // Start slightly higher
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }} // Trigger slightly earlier
          transition={{ duration: 0.7, ease: "easeOut" }} // Slower, easing out
          className="titleContainer"
        >
          <h2 className="title">Elevating Digital Experiences</h2> {/* More engaging title */}
          <p className="description">
            We are architects of the digital frontier, a collective of passionate innovators dedicated to crafting exceptional web and mobile solutions. We merge strategic thinking with pixel-perfect execution to build platforms that not only look stunning but drive tangible results and user delight.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="card"
            >
              {/* Icon Wrapper with dynamic class for background color */}
              <div className={`iconWrapper icon-wrapper-${service.id}`}>
                {service.icon}
              </div>
              <h3 className="cardTitle">{service.title}</h3>
              <p className="cardDescription">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* --- JSX Style Block for About --- */}
      <style jsx>{`
        /* --- CSS Variables --- */
        .aboutSection {
          --bg-start: #f9fafb;
          --bg-end: #f0f4f8; /* Lighter blue-gray end */
          --card-bg: #ffffff;
          --text-primary: #111827; /* Gray 900 */
          --text-secondary: #374151; /* Gray 700 - Slightly darker desc */
          --border-color: #e5e7eb; /* Gray 200 */
          --shadow-color: rgba(0, 0, 0, 0.08);
          --shadow-hover-color: rgba(0, 0, 0, 0.12);
          --transition-speed: 0.35s;
          --transition-curve: ease-in-out;

          /* Icon Specific Colors */
          --clr-web: #4f46e5; /* Indigo 600 */
          --clr-web-bg: rgba(79, 70, 229, 0.1);
          --clr-android: #10b981; /* Emerald 500 */
          --clr-android-bg: rgba(16, 185, 129, 0.1);
          --clr-ios: #374151; /* Gray 700 */
          --clr-ios-bg: rgba(55, 65, 81, 0.1);
          --clr-design: #ec4899; /* Pink 500 */
          --clr-design-bg: rgba(236, 72, 153, 0.1);

          /* Hover Gradient Border Colors */
          --gradient-start: var(--clr-web);
          --gradient-end: var(--clr-design);
        }

        /* --- Base Section Styling --- */
        .aboutSection {
          padding-top: 7rem;    /* Even more padding */
          padding-bottom: 7rem;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          background: linear-gradient(170deg, var(--bg-start) 0%, var(--bg-end) 100%); /* Diagonal gradient */
          overflow: hidden; /* Prevent pseudo-elements from spilling */
        }
        .container {
           max-width: 80rem;
           margin-left: auto;
           margin-right: auto;
        }

        /* --- Title Area Styling --- */
        .titleContainer {
            text-align: center;
            margin-bottom: 4.5rem; /* More space */
        }
        .title {
            font-size: 2.25rem; /* Adjusted size */
            line-height: 1.2;
            font-weight: 800; /* Bolder */
            color: var(--text-primary);
            margin-bottom: 1.25rem;
        }
        .description {
            font-size: 1.1rem;
            line-height: 1.8; /* More leading */
            color: var(--text-secondary);
            max-width: 60rem; /* Slightly wider */
            margin-left: auto;
            margin-right: auto;
        }

        /* --- Grid Layout --- */
        .grid {
            display: grid;
            grid-template-columns: repeat(1, minmax(0, 1fr));
            gap: 2.5rem; /* Keep gap */
        }

        /* --- Card Styling --- */
        .card {
            background-color: var(--card-bg);
            padding: 2.5rem 1.75rem; /* More padding */
            border-radius: 0.875rem; /* Slightly more rounded */
            border: 1px solid var(--border-color);
            text-align: center;
            position: relative; /* For pseudo-element positioning */
            z-index: 1;
            overflow: hidden; /* Clip potential overflows */
            transition: transform var(--transition-speed) var(--transition-curve),
                        box-shadow var(--transition-speed) var(--transition-curve),
                        border-color var(--transition-speed) var(--transition-curve);
            box-shadow: 0 4px 15px -3px var(--shadow-color); /* Softer initial shadow */
        }

        /* --- Card Hover Effect (Gradient Border) --- */
        .card::before {
            content: '';
            position: absolute;
            top: -2px; left: -2px; right: -2px; bottom: -2px; /* Create space for border */
            border-radius: calc(0.875rem + 2px); /* Match card radius + border thickness */
            background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
            opacity: 0;
            transition: opacity var(--transition-speed) var(--transition-curve);
            z-index: -1; /* Place behind the card */
        }

        .card:hover {
             transform: translateY(-8px) rotate(-1.5deg); /* Increased lift and subtle rotate */
             box-shadow: 0 18px 35px -8px var(--shadow-hover-color); /* More pronounced shadow */
             border-color: transparent; /* Hide solid border to show gradient */
        }
        .card:hover::before {
            opacity: 1; /* Reveal gradient border on hover */
        }


        /* --- Icon Wrapper Styling --- */
        .iconWrapper {
             width: 64px; /* Fixed size circle */
             height: 64px;
             border-radius: 50%;
             margin: 0 auto 1.75rem auto; /* Center and provide more space */
             display: flex;
             align-items: center;
             justify-content: center;
             transition: transform calc(var(--transition-speed) * 1.2) var(--transition-curve),
                         background-color var(--transition-speed) var(--transition-curve);
        }
        /* Assign background colors using dynamic classes */
        .icon-wrapper-web { background-color: var(--clr-web-bg); }
        .icon-wrapper-android { background-color: var(--clr-android-bg); }
        .icon-wrapper-ios { background-color: var(--clr-ios-bg); }
        .icon-wrapper-design { background-color: var(--clr-design-bg); }

        /* Icon wrapper hover effect (triggered by card hover) */
        .card:hover .iconWrapper {
             transform: scale(1.15) rotate(8deg); /* Larger scale and rotation */
        }


        /* --- Icon Styling (using :global) --- */
        :global(.icon-service) {
            transition: color var(--transition-speed) var(--transition-curve); /* Smooth color transition */
            position: relative; /* Ensure icon is above bg */
            z-index: 2;
        }
        :global(.icon-web) { color: var(--clr-web); }
        :global(.icon-android) { color: var(--clr-android); }
        :global(.icon-ios) { color: var(--clr-ios); }
        :global(.icon-design) { color: var(--clr-design); }

        /* Optional: Darken icon color slightly on hover? */
        /* .card:hover :global(.icon-service) { filter: brightness(0.9); } */


        /* --- Card Content Styling --- */
        .cardTitle {
            font-size: 1.25rem; /* Slightly larger title */
            font-weight: 700; /* Bolder card title */
            color: var(--text-primary);
            margin-bottom: 0.75rem;
        }
        .cardDescription {
            color: var(--text-secondary);
            font-size: 0.9rem;
            line-height: 1.65;
        }

        /* --- Responsiveness --- */
        @media (min-width: 640px) { /* sm */
            .title { font-size: 2.5rem; }
            .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 2rem; } /* Adjust gap for 2 columns */
        }
        @media (min-width: 1024px) { /* lg */
            .title { font-size: 2.75rem; }
            .grid { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 2.5rem; } /* Adjust gap for 4 columns */
            .aboutSection { padding-left: 2rem; padding-right: 2rem; }
        }
         @media (min-width: 1280px) { /* xl */
            .container { max-width: 85rem; } /* Slightly wider container on xl screens */
             .title { font-size: 3rem; }
        }

      `}</style>
    </section>
  );
};

export default About;