import BannerMini from "@/components/BannerMini/BannerMini";

export default function Page() {
  return (
    <div>
      <BannerMini title="LA7 Interior Studio" background="banner-2.jpg" />
      <section className="page-section bg-white-x">
        <div className='container'>
          <h3>Our Story</h3>
          <p className="mb-4">At LA7 Interior Studio, we believe that great design goes beyond aesthetics. It's about creating spaces that enhance the way you live, work, and feel. Founded in [Year], our journey began with a passion for transforming ordinary spaces into extraordinary experiences. Over the years, we have grown into a full-service interior design firm, trusted by homeowners, businesses, and organizations to bring their visions to life.</p>
          <h3>Philosophy</h3>
          <p className="mb-4">Design is not just about what a space looks like, but how it functions and how it makes you feel. Our philosophy centers around the idea of holistic design, where every element—from the choice of materials to the arrangement of furniture—works in harmony to create an environment that is both beautiful and purposeful. We approach each project with a fresh perspective, tailoring our designs to reflect the unique personality, needs, and aspirations of our clients.</p>
          <h3>Process</h3>
          <p className="mb-4">Every project we undertake is a collaboration, with our clients at the heart of the process. We start by listening—understanding your lifestyle, your preferences, and your goals. From there, we guide you through each step of the design journey:</p>
          <ul className="mb-4">
            <li className="mb-2"><b>Consultation:</b> We begin with an in-depth consultation to get to know you and your space. Whether it's a cozy home or a bustling office, we aim to understand your vision and needs.</li>
            <li className="mb-2"><b>Conceptualization:</b> Our team then develops a design concept, complete with mood boards, sketches, and material selections that align with your vision.</li>
            <li className="mb-2"><b>Design Development:</b> Once the concept is approved, we refine the design, finalize the details, and create a comprehensive plan that ensures a seamless execution.</li>
            <li className="mb-2"><b>Execution:</b> We manage every aspect of the implementation, from sourcing materials to overseeing construction, ensuring that your project is completed to the highest standard.</li>
            <li><b>Final Reveal:</b> The best part—seeing your dream space come to life. We ensure every detail is perfect before handing over the keys to your beautifully designed space.</li>
          </ul>
          <h3>Team</h3>
          <p>Our team is made up of passionate, creative professionals with diverse backgrounds in interior design, architecture, project management, and more. Each member brings a unique perspective and skill set, contributing to a collaborative environment where innovative ideas flourish. We are united by a shared commitment to excellence, quality craftsmanship, and customer satisfaction.</p>
          <h3>Get in Touch</h3>
          <p>Ready to start your design journey with us? Whether you have a clear vision or need help discovering your style, we’re here to guide you every step of the way. Contact us today to schedule a consultation and let's create something beautiful together.</p>
        </div>
      </section>
    </div>
  );
}
