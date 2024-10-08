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
                        <input type="email" className="form-control form-control-lg text-center-xs" id="email" placeholder="Your email" />
                    </div>
                    <div className="col-md-3 col-lg-2">
                        <button className="btn btn-primary btn-lg w-100">Subscribe</button>
                    </div>
                </form>
                <p className='mt-4 mb-0'><small className='text-center d-block w-75 mx-auto lh-lg'>By submitting this form you consent to us emailing you occasionally about our products and services. You can unsubscribe from emails at any time, and we will never pass your email to third parties.</small></p>
            </div>
        </section>
    )
}