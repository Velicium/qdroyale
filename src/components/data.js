import bangles from "../../public/img/icons/bangles.png";
import bracelet from "../../public/img/icons/bracelet.png";
import brooch from "../../public/img/icons/brooch.png";
import earrings from "../../public/img/icons/earrings.png";
import necklace from "../../public/img/icons/necklace.png";
import rings from "../../public/img/icons/rings.png";
import design from "../../public/img/icons/design.png";
import threedimensions from "../../public/img/icons/threedimensions.png";
import manufacturing from "../../public/img/icons/manufacturing.png";
import goldplating from "../../public/img/icons/goldplating.png";
import vacuumchamber from "../../public/img/icons/vacuumchamber.png";
import qa from "../../public/img/icons/qa.png";

import benefitOneImg from "../../public/img/store.jpg"
import benefitOneTwoImg from "../../public/img/office.jpg"
import benefitTwoImg from "../../public/img/products.jpg";
import benefitThreeImg from "../../public/img/desertlace.jpg";

const benefitOne = {
  title: "R&D",
  desc: "What we do is not just a job but our passion and our calling. Discover below how we can help you.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Design & R&D",
      desc: "We have a team of some of the most well-versed, highly experienced creative minds in the industry.",
      icon: design,
    },
    {
      title: "3D Modeling",
      desc: "Creating beautiful and captivating high quality 3D models of jewelries that satisfy our customers&apos;' requirements.",
      icon: threedimensions,
    },
    {
      title: "Manufacturing",
      desc: "We specialize in manufacturing beautiful custom designs to satisfy our customer's specifications based on their own designs or with the help of our design teams to accurately satisfy our customers.",
      icon: manufacturing,
    },
  ],
};

const benefitOneTwo = {
  title: "Finishing & QA",
  desc: "What we do is not just a job but our passion and our calling. Discover below how we can help you.",
  image: benefitOneTwoImg,
  bullets: [
    {
      title: "Water Plating",
      desc: "Performance matters. I optimize websites and apps for speed, ensuring your users enjoy a fast and responsive experience, which in turn boosts user satisfaction and SEO rankings.",
      icon: goldplating,
    },
    {
      title: "Vacume Metalization",
      desc: "My development goes hand-in-hand with an eye for design. I create user interfaces that are not only functional but also aesthetically pleasing, providing a seamless and enjoyable user journey.",
      icon: vacuumchamber,
    },
    {
      title: "Quality Assurance and Testing",
      desc: "We rigorously test our products to guarantee a the best quality assurance for our clients. We do tensile tests, drop tests, sensory tests.",
      icon: qa,
    },
  ],
};

const benefitTwo = {
  title: "Products",
  desc: "We can craft any design you want with cubic zirconium, 925 sterling silver, brass, zinc alloy, or metal.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Rings",
      desc: "",
      icon: rings,
    },
    {
      title: "Bangles",
      desc: "",
      icon: bangles,
    },
    {
      title: "Earrings",
      desc: "",
      icon: earrings,
    },
  ],
};

const benefitThree = {
  title: "More Products",
  desc: "We can craft any design you want with cubic zirconium, 925 sterling silver, brass, zinc alloy, or metal.",
  image: benefitThreeImg,
  bullets: [
    {
      title: "Bracelets",
      desc: "",
      icon: bracelet,
    },
    {
      title: "Brooches",
      desc: "",
      icon: brooch,
    },
    {
      title: "Necklaces",
      desc: "",
      icon: necklace,
    },
  ],
};


export {benefitOne, benefitOneTwo, benefitTwo, benefitThree};
