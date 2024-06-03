"use client";

import {
  Card,
  CardBody,
  IconButton,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export function ContactForm() {
  return (
    <section className="px-8 py-16">
      <div className="container mx-auto mb-20 text-center">
        <h1 className="text-blue-gray-500 mb-4 text-lg font-semibold">
          Contact Us
        </h1>
        <p className="mx-auto w-full lg:w-5/12 !text-gray-500 text-base">
          Ready to get started? Feel free to reach out through the contact form,
          and let us embark on a journey of innovation and success.
        </p>
      </div>
      <div>
        <Card shadow={true} className="container mx-auto border border-gray/50">
          <CardBody className="grid">
            <div className="w-full rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              <h4 className="text-white mb-2 text-2xl font-semibold">
                Contact Information
              </h4>
              <p className="mx-auto mb-8 text-base !text-gray-500">
                Fill up the form and our Team will get back to you within 24
                hours.
              </p>
              <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white" />
                <h6 className="text-white mb-2 text-lg font-medium">
                  +1(424) 535 3523
                </h6>
              </div>
              <div className="flex my-2 gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <h6 className="text-white mb-2 text-lg font-medium">
                  hello@mail.com
                </h6>
              </div>
              <div className="flex mb-10 gap-5">
                <TicketIcon className="h-6 w-6 text-white" />
                <h6 className="text-white mb-2 text-lg font-medium">
                  Open Support Ticket
                </h6>
              </div>
              <div className="flex items-center gap-5">
                <IconButton variant="text" color="white" as="a" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-facebook text-lg" />
                </IconButton>
                <IconButton variant="text" color="white" as="a" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-instagram text-lg" />
                </IconButton>
                <IconButton variant="text" color="white" as="a" href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-github text-lg" />
                </IconButton>
                <IconButton variant="text" color="white" as="a" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin text-lg" />
                </IconButton>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
