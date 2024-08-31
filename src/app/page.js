import Banner from "@/components/Banner/Banner";
import "./page.scss";
import ServiceItems1 from "@/components/ServiceItems1/ServiceItems1";
import Portfolio from "@/components/Portfolio/Portfolio";
import Feedbacks from "@/components/Feedbacks/Feedbacks";
import Partners from "@/components/Partners/Partners";
import AboutSection from "@/components/AboutSection/AboutSection";
import ServiceItems2 from "@/components/ServiceItems2/ServiceItems2";

export default function Home() {
  return (
    <div>
      <Banner />
      <AboutSection />
      <ServiceItems1 />
      <ServiceItems2 />
      <Portfolio />
      <Feedbacks />
      <Partners />
    </div>
  );
}
