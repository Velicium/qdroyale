import React from "react";
import { Container } from "@/components/Container";

export const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-center w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 rounded-xl">
        <div className="flex-flex-col text-center">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Download our Brochure & Company Profile
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Grab the opportunity to partner with us for the best quality work with the best price options.
          </p>
        </div>
          <div className="flex-shrink-0 w-full text-center lg:w-auto">
            <a
              href="/Royale_Brochure.pdf"
              download={true}
              target="_blank"
              rel="noopener"
              className="inline-block py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 "
            >
              Download Our Brochure
            </a>
          </div>
          <div className="flex-shrink-0 w-full text-center lg:w-auto">
            <a
              href="/QingdaoRoyaleAccessoriesLtd.docx"
              download={true}
              target="_blank"
              rel="noopener"
              className="inline-block py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 "
            >
              Download Company Profile
            </a>
          </div>
      </div>
    </Container>
  );
};
