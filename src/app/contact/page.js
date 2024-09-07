import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <section className="page-section sub-page bg-white-x">
        <div className='container text-center'>
          <p className="fw-bold mb-4 text-primary">Contact</p>
          <h2 className="fw-bold">How can we help?</h2>
          <p className="w-50 mx-auto mb-4">We are here to help and answer any question you might have, We look forward to hearing from you</p>

          <div className='row pt-5'>
            <div className='col-md-6 mb-xs-4'>
              <p>Call us on</p>
              <h2><Link href="tel:+16138803700">+(161)38803700</Link></h2>
            </div>
            <div className='col-md-6 mb-xs-4'>
              <p>Email to</p>
              <h2><Link href="tel:+16138803700">svkodituwakku@gmail.com</Link></h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
