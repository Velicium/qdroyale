// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Clients from "./clients";
import Services from "./services";
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
      <Services />
      {/* <Accessories />
      <Brochure />
      <Testimonial />
      <PopularClients />
      <ContactForm /> */}
      <Footer />
    </>
  );
}
