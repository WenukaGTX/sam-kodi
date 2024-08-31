import BannerMini from "@/components/BannerMini/BannerMini";
import ServiceItems from "@/components/ServiceItems1/ServiceItems";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <BannerMini title="Interior design services" background="banner-3.jpg" />
      <section className="page-section bg-white-x">
        <div className='container'>
          <p className="mb-4">At LA7 INterior Studio, we offer a comprehensive range of interior design services tailored to meet the unique needs of our clients. Whether you’re looking to transform your home, office, or commercial space, our team of expert designers is here to bring your vision to life with creativity, precision, and passion.</p>
          <div className="d-flex">
            <Image
              src="/icons/solar_home_light.svg"
              alt="Home design icon"
              width={60}
              height={60}
              priority
            />
            <div className="ms-4">
              <h3>Home Design & Styling</h3>
              <p className="mb-4">our home should be a reflection of who you are—a space that not only looks beautiful but also feels like you. Our residential interior design services are tailored to create harmonious, functional living environments that match your lifestyle and taste. From cozy apartments to expansive homes, we specialize in turning your vision into reality with personalized design solutions that enhance comfort, style, and function.</p>
            </div>
          </div>
          <div className="d-flex">
            <Image
              src="/icons/solar_sofa-2_light.svg"
              alt="Home design icon"
              width={60}
              height={60}
              priority
            />
            <div className="ms-4">
              <h3>Commercial Spaces</h3>
              <p className="mb-4">Space planning is the foundation of good design. It's about making the best use of every square foot, ensuring that your space flows naturally and functions optimally. Our space planning services include detailed analysis, strategic layouts, and creative solutions that make your space work for you, whether it's maximizing storage in a small apartment or optimizing workflow in a large office.</p>
            </div>
          </div>
          <div className="d-flex">
            <Image
              src="/icons/solar_display_light.svg"
              alt="Home design icon"
              width={60}
              height={60}
              priority
            />
            <div className="ms-4">
              <h3>Virtual Designing</h3>
              <p className="mb-4">Lighting plays a crucial role in setting the mood and enhancing the functionality of a space. Our lighting design services focus on creating the perfect ambiance, whether you need task lighting for a kitchen, mood lighting for a living room, or statement lighting for a commercial space. We design lighting solutions that not only illuminate your space but also highlight its best features.</p>
            </div>
          </div>
          <div className="d-flex">
            <Image
              src="/icons/solar_paint_roller_light.svg"
              alt="Home design icon"
              width={60}
              height={60}
              priority
            />
            <div className="ms-4">
              <h3>Renovation & Repair</h3>
              <p className="mb-4">Sometimes, the perfect piece of furniture doesn't exist—until it's custom-made just for you. Our custom furniture and decor services allow you to create one-of-a-kind pieces that fit perfectly with your space and style. From sofas and dining tables to artwork and lighting, we work with skilled artisans and manufacturers to deliver high-quality, personalized items that elevate your interior to the next level.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
