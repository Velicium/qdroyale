"use client";

import React from "react";
import Image from "next/image";
import { Card, CardBody, Avatar } from "@material-tailwind/react";

export function Testimonial() {
  const [active, setActive] = React.useState(3);

  return (
    <section className="py-12 px-8 lg:py-24">
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-20 text-center">
          <h2 className="text-blue-gray-700 mb-4 text-3xl font-bold">
            What Clients Say
          </h2>
          <p className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12">
            Discover what clients have to say about their experiences working
            with me. My client&apos;s satisfaction is my greatest achievement!
          </p>
        </div>
        <Card color="transparent" shadow={false} className="py-8 lg:flex-row">
          <CardBody className="w-full lg:gap-10 h-full lg:!flex justify-between ">
            <div className="w-full mb-10 lg:mb-0">
              <p className="mb-3 w-full lg:w-8/12 font-normal !text-gray-500">
                I had the pleasure of working with Lily on a critical web
                development project, and I can confidently say that their
                expertise and professionalism exceeded my expectations.
              </p>
              <h6 className="text-blue-gray-700 mb-0.5 text-lg font-medium">
                Michael - Technical Manager
              </h6>
              <p className="font-normal mb-5 !text-gray-500">
                Lane Woods
              </p>
            </div>
            <div className="w-full mb-10 lg:mb-0">
              <p className="mb-3 w-full lg:w-8/12 font-normal !text-gray-500">
                I had the pleasure of working with Lily on a critical web
                development project, and I can confidently say that their
                expertise and professionalism exceeded my expectations.
              </p>
              <h6 className="text-blue-gray-700 mb-0.5 text-lg font-medium">
                Michael - Technical Manager
              </h6>
              <p className="font-normal mb-5 !text-gray-500">
                Ziio
              </p>
            </div>
            <div className="w-full mb-10 lg:mb-0">
              <p className="mb-3 w-full lg:w-8/12 font-normal !text-gray-500">
                I had the pleasure of working with Lily on a critical web
                development project, and I can confidently say that their
                expertise and professionalism exceeded my expectations.
              </p>
              <h6 className="text-blue-gray-700 mb-0.5 text-lg font-medium">
                Michael - Technical Manager
              </h6>
              <p className="font-normal mb-5 !text-gray-500">
                Trifairy
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Testimonial;
