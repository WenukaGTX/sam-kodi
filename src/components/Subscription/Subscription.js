import Link from 'next/link';
import Image from "next/image";
import './subscription.scss';

export default function Subscription() {
    return (
        <section className="page-section services bg-grey">
            <div className='container'>
                <div className="page-header">
                    <h1>Stay Ahead with Expert Insights</h1>
                    <p>Subscribe to our Newsletter for the latest tips, strategies, & industry trends</p>
                </div>
                <form className="row g-2 justify-content-center">
                    <div className="col-md-4">
                        <label htmlFor="email" className="visually-hidden">Password</label>
                        <input type="email" className="form-control" id="email" placeholder="Your email" />
                    </div>
                    <div className="col-md-2">
                        <button type="submit" className="btn btn-primary mb-3">Subscribe Now</button>
                    </div>
                </form>
                <small className='text-center d-block w-75 mx-auto lh-lg'>By submitting this form you consent to us emailing you occasionally about our products and services. You can unsubscribe from emails at any time, and we will never pass your email to third parties.</small>
            </div>
        </section>
    )
}