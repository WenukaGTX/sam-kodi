import BannerMini from "@/components/BannerMini/BannerMini";

export default function Page() {
  return (
    <div>
      <BannerMini title="LA7 Interior Studio" background="banner-2.jpg" />
      <section className="page-section bg-white-x">
        <div className='container'>
          <h3>Our Story</h3>
          <p className="mb-4">Content goes here</p>
          <h3>Philosophy</h3>
          <p className="mb-4">Content goes here</p>
        </div>
      </section>
    </div>
  );
}
