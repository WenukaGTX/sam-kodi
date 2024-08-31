import AboutSection from "@/components/AboutSection/AboutSection";
import Banner from "@/components/Banner/Banner";
import BlogItems from "@/components/BlogItems/BlogItems";
import ServiceItems1 from "@/components/ServiceItems1/ServiceItems1";
import ServiceItems2 from "@/components/ServiceItems2/ServiceItems2";
import Subscription from "@/components/Subscription/Subscription";
import "./page.scss";

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
