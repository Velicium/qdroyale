"use client";

import Image from "next/image";
import { Input, Button } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <h1 className="text-blue-gray-700 mb-4 lg:text-5xl leading-tight text-3xl">
            Welcome to Royale Accessories!
          </h1>
          <p className="mb-4 text-gray-500 md:pr-16 xl:pr-28">
            Royale Accessories Ltd. was established by Lonny Wang in 2008, who
            has been in the fashion (costume) jewelry industry for over 20 years.
            With his experience and expertise, Mr. Wang leads over 200 employees,
            organized into various teams including: material sourcing, design,
            product development, quality control, and sales.
          </p>
          <p className="font-normal text-gray-500">
            <a href="#" className="font-medium underline transition-colors">
              Read More
            </a>
          </p>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/image-7.svg"
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
