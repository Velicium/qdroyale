import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Services } from "@/components/Services";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitOneTwo, benefitTwo, benefitThree } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Services"
        title=" What We Can Do For You"
      >
        We can craft any design you want with cubic zirconium, 925 sterling silver, brass, zinc alloy, or metal.
      </SectionTitle>

      <Services data={benefitOne} />
      <Services imgPos="right" data={benefitOneTwo} />
      <Services data={benefitTwo} />
      <Services imgPos="right" data={benefitThree} />

      {/* <SectionTitle
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" /> */}

      {/* <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials /> */}

      {/* <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq /> */}
      <Cta />
    </Container>
  );
}
