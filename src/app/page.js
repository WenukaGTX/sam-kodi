import Banner from "@/components/Banner/Banner";
import "./page.scss";
import ServiceItems1 from "@/components/ServiceItems1/ServiceItems1";
import Portfolio from "@/components/Portfolio/Portfolio";
import BlogItems from "@/components/BlogItems/BlogItems";
import Partners from "@/components/Partners/Partners";
import AboutSection from "@/components/AboutSection/AboutSection";
import ServiceItems2 from "@/components/ServiceItems2/ServiceItems2";
import Subscription from "@/components/Subscription/Subscription";

export default function Home() {
  return (
    <div>
      <Banner />
      <AboutSection />
      <ServiceItems1 />
      <ServiceItems2 />
      <Subscription />
      <BlogItems />
    </div>
  );
}
