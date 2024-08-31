import BannerMini from "@/components/BannerMini/BannerMini";
import ServiceItems from "@/components/ServiceItems1/ServiceItems1";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <BannerMini title="Page title" background="banner-3.jpg" />
      <section className="page-section bg-white-x">
        <div className='container'>
          <p className="mb-4">Content goes here</p>
        </div>
      </section>
    </div>
  );
}
