

import React from "react";

// Layout
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

// Contact Components
import ContactHero from "../Contact/ContactHero";
import ContactCards from "../Contact/ContactCards";
import OfficeInformation from "../Contact/OfficeInformation";
import { GoogleMap } from "../Contact/GoogleMap";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <ContactHero />

      {/* Contact Information Cards */}
      <ContactCards />

      {/* Office Information */}
      <OfficeInformation />

      {/* Google Map */}
      <GoogleMap />

     
    </div>
  );
};

export default Contact;