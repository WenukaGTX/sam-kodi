import Banner from "@/components/Banner/Banner";
import "./page.scss";
import ServiceItems from "@/components/ServiceItems/ServiceItems";
import Portfolio from "@/components/Portfolio/Portfolio";
import Feedbacks from "@/components/Feedbacks/Feedbacks";
import Partners from "@/components/Partners/Partners";
import AboutSection from "@/components/AboutSection/AboutSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <AboutSection />
      <ServiceItems />
      <Portfolio />
      <Feedbacks />
      <Partners />
    </div>
  );
}
