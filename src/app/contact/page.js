import Link from "next/link";

export default function Page() {
  return (
    <section className="page-section sub-page bg-white-x">
      <div className='container'>
        <div className="page-header">
          <p className="fw-bold mb-4 text-primary">Contact</p>
          <h2 className="fw-bold">How can we help?</h2>
          <p className="w-50 mx-auto d-none d-sm-block">We are here to help and answer any question you might have. We look forward to hearing from you</p>
        </div>

        <div className='row pt-5'>
          <div className='col-md-6 mb-xs-4 text-center'>
            <p>Call us on</p>
            <h2><Link href="tel:+16138803700">+1 (613) 880 3700</Link></h2>
          </div>
          <div className='col-md-6 text-center'>
            <p>Email to</p>
            <h2><Link href="mailto:viraj@fractionalcro.ca">viraj@fractionalcro.ca</Link></h2>
          </div>
        </div>
      </div>
    </section>
  );
}
