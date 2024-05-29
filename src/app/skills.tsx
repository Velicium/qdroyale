"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: SwatchIcon,
    title: "Designing",
    children:
      "We have a team of some of the most well-versed, highly experienced creative minds in the industry.",
  },
  {
    icon: RectangleGroupIcon,
    title: "3D Modeling",
    children:
      "Creating beautiful and captivating high quality 3D models of jewelries that satisfy our customers' requirements.",
  },
  {
    icon: FingerPrintIcon,
    title: "Manufacturing",
    children:
      " We specialize in manufacturing beautiful custom designs to satisfy our customer's specifications based on their own designs or with the help of our design teams to accurately satisfy our customers.",
  },
  {
    icon: HashtagIcon,
    title: " Water Plating",
    children:
      "Performance matters. I optimize websites and apps for speed, ensuring your users enjoy a fast and responsive experience, which in turn boosts user satisfaction and SEO rankings.",
  },
  {
    icon: EyeIcon,
    title: "Vacume Metalization",
    children:
      "My development goes hand-in-hand with an eye for design. I create user interfaces that are not only functional but also aesthetically pleasing, providing a seamless and enjoyable user journey.",
  },
  {
    icon: DocumentTextIcon,
    title: "Testing and Quality Assurance",
    children:
      "We rigorously test our products to guarantee a the best quality assurance for our clients. We do tensile tests, drop tests, sensory tests.",
  },
];

export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          SERVICES
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          What We Do
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          We are the best in what we do, which is designing, modeling, crafting, and polishing jewelries and accessories for top brands globally.
          We are not only crafting marvelous eye catching jewelries but also crafting happy experiences and immersive memories.
          What we do is not just a job but our passion and our calling. Discover below how QD ROYALE can help you.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
