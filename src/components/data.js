import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Services",
  desc: "What we do is not just a job but our passion and our calling. Discover below how we can help you.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Designing",
      desc: "We have a team of some of the most well-versed, highly experienced creative minds in the industry.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "3D Modeling",
      desc: "Creating beautiful and captivating high quality 3D models of jewelries that satisfy our customers&apos;' requirements.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Manufacturing",
      desc: "We specialize in manufacturing beautiful custom designs to satisfy our customer's specifications based on their own designs or with the help of our design teams to accurately satisfy our customers.",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: "Water Plating",
      desc: "Performance matters. I optimize websites and apps for speed, ensuring your users enjoy a fast and responsive experience, which in turn boosts user satisfaction and SEO rankings.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Vacume Metalization",
      desc: "My development goes hand-in-hand with an eye for design. I create user interfaces that are not only functional but also aesthetically pleasing, providing a seamless and enjoyable user journey.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Quality Assurance and Testing",
      desc: "We rigorously test our products to guarantee a the best quality assurance for our clients. We do tensile tests, drop tests, sensory tests.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Products",
  desc: "We can do anything with your designs or with ours by our creative in-house design team.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Rings",
      desc: "We can craft any design you want with cubic zirconium, 925 sterling silver, brass, zinc alloy, or metal.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Bangles",
      desc: "We can craft any design you want with cubic zirconium, 925 sterling silver, brass, zinc alloy, or metal.",
      icon: <SunIcon />,
    },
    {
      title: "Earrings",
      desc: "We can craft any design you want with cubic zirconium, 925 sterling silver, brass, zinc alloy, or metal.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Bracelets",
      desc: "We can craft any design you want with cubic zirconium, 925 sterling silver, brass, zinc alloy, or metal.",
      icon: <SunIcon />,
    },
    {
      title: "Brooches",
      desc: "We can craft any design you want with cubic zirconium, 925 sterling silver, brass, zinc alloy, or metal.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Necklaces",
      desc: "We can craft any design you want with cubic zirconium, 925 sterling silver, brass, zinc alloy, or metal.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};