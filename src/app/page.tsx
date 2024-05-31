// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Clients from "./clients";
import Skills from "./skills";
import Accessories from "./accessories";
import Brochure from "./brochure";
import Testimonial from "./testimonial";
import PopularClients from "./popular-clients";
import ContactForm from "./contact-form";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Clients /> */}
      <Skills />
      {/* <Accessories />
      <Brochure />
      <Testimonial />
      <PopularClients />
      <ContactForm /> */}
      <Footer />
    </>
  );
}
