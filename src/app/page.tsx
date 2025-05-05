// Remove the Image import if it's no longer directly used in this file
// import Image from "next/image";

// Import the components we created
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    // Use a React Fragment <>...</> to avoid adding an extra div to the DOM,
    // or a simple div if you need a wrapper for some reason.
    // Remove the previous grid layout, padding, and font styles from here.
    // Styling is handled within components and globals.css.
    <>
      <Navbar /> {/* Navbar is outside main to allow fixed positioning */}
      <main>
        {/* Render the sections in the desired order */}
        <Hero />
        <About />
        <Portfolio />
        <Team />
        <Contact />
      </main>
      <Footer /> {/* Footer comes after the main content */}
    </>
  );
}