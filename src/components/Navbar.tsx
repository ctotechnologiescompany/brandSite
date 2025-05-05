"use client"; // Required for useState and styled-jsx

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          {/* Logo */}
          <div>
            <Link href="#home" className="logo" onClick={closeMobileMenu}>
              XYZ Technologies
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="desktopNav">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="navLink">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="mobileMenuButtonContainer">
            <button
              className="mobileMenuButton"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {/* Basic Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobileMenu">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="navLink mobileNavLink" onClick={closeMobileMenu}>
                {item.name}
              </Link>
            ))}
        </div>
      )}

      {/* --- JSX Style Block --- */}
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          /* Slightly less transparent background */
          background-color: rgba(255, 255, 255, 0.95);
          /* Slightly stronger blur */
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          /* Subtle bottom border */
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          z-index: 50;
          height: 4rem;
        }

        .container {
          max-width: 80rem; /* Increased max-width slightly */
          margin-left: auto;
          margin-right: auto;
          padding-left: 1.5rem; /* Consistent padding */
          padding-right: 1.5rem;
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          flex-shrink: 0;
          font-size: 1.6rem; /* Slightly larger */
          line-height: 1; /* Adjust line height */
          font-weight: 700;
          color: #4338ca; /* Darker Indigo to match Hero button */
          text-decoration: none;
          transition: opacity 0.2s ease; /* Added transition */
        }
        .logo:hover {
            text-decoration: none;
            opacity: 0.9; /* Subtle hover */
        }

        .desktopNav {
          display: none; /* Hidden by default, shown via media query */
          gap: 2.5rem; /* Increased gap */
        }

        .navLink {
          display: block;
          color: #374151; /* Gray 700 */
          padding: 0.5rem 0; /* Remove horizontal padding, use gap */
          position: relative; /* For underline effect */
          font-size: 0.9rem; /* Slightly smaller */
          line-height: 1.25rem;
          font-weight: 500;
          transition: color 150ms ease-in-out;
          text-decoration: none;
          white-space: nowrap;
        }
        /* Underline effect */
        .navLink::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -2px; /* Position underline slightly below text */
            left: 50%;
            background-color: #4f46e5; /* Indigo */
            transition: all 0.3s ease-out;
            transform: translateX(-50%);
        }

        .navLink:hover {
          color: #4f46e5; /* Indigo 600 */
          text-decoration: none;
        }
         .navLink:hover::after {
            width: 100%; /* Full underline on hover */
        }

        /* Mobile Menu Styles */
        .mobileMenuButtonContainer {
            display: flex;
            align-items: center;
        }
        .mobileMenuButton {
          display: flex;
          align-items: center;
          padding: 0.5rem;
          border: none;
          background: none;
          cursor: pointer;
        }
        .mobileMenuButton svg {
            width: 1.5rem;
            height: 1.5rem;
            stroke: #374151;
            transition: stroke 150ms ease-in-out;
        }
        .mobileMenuButton:hover svg {
            stroke: #4f46e5;
        }
        .mobileMenu {
            position: fixed;
            top: 4rem; /* Below navbar */
            left: 0;
            right: 0;
            background-color: white;
            padding: 1rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            z-index: 40;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            border-bottom-left-radius: 0.5rem;
            border-bottom-right-radius: 0.5rem;
        }
        .mobileNavLink {
            /* Inherits .navLink styles, add specifics */
            width: 100%;
            text-align: center;
            padding: 0.75rem 1rem; /* Slightly larger padding for mobile */
        }
         .mobileNavLink::after { /* Hide underline effect on mobile */
             display: none;
         }

        /* --- Responsiveness --- */
        @media (min-width: 768px) { /* md breakpoint */
          /* Container padding is now handled by base .container rule */
          .desktopNav {
              display: flex; /* Show desktop nav */
          }
          .mobileMenuButtonContainer { /* Hide container on desktop */
              display: none;
          }
          .mobileMenu { /* Hide mobile dropdown on desktop */
             display: none;
          }
        }

        /* No specific lg styles needed now for container */
        /* @media (min-width: 1024px) { } */
      `}</style>
    </>
  );
};

export default Navbar;