import Link from 'next/link';
import Image from "next/image";
import './blogItems.scss';

export default function BlogItems() {
    return (
        <section className="page-section feedbacks bg-white-x">
            <div className='container'>
                <div className="page-header">
                    <h1>The Insightful Business</h1>
                    <p>Driving Success Through Measurable Results</p>
                </div>
                <div className='row'>
                    <div className='col-md-4 mb-xs-2'>
                        <div className="card feature-card">
                            <Image
                                src={"/blog/building-high-performing-sales-team.png"}
                                className='img-fluid'
                                alt="Building a High Performing Sales Team"
                                width={800}
                                height={200}
                                priority
                            />
                            <div className="card-body">
                                <h5 className="card-title">Shaping Your Startup: Building a High Performing Sales Team</h5>
                                <p className="card-text">Ideas evolve into products, sparking the launch of a startup</p>
                                <Link href="/blog/1-building-high-performing-sales-team" target='_blank'>Read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mb-xs-2'>
                        <div className="card feature-card">
                            <Image
                                src={"/blog/understanding-lean-startups.png"}
                                className='img-fluid'
                                alt="Understanding Lean Startups"
                                width={800}
                                height={200}
                                priority
                            />
                            <div className="card-body">
                                <h5 className="card-title">Understanding Lean Startups</h5>
                                <p className="card-text">Lean startup methodology has emerged as a transformative approach</p>
                                <Link href="/blog/2-understanding-lean-startups" target='_blank'>Read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card feature-card">
                            <Image
                                src={"/blog/does-your-startup-really-need-investors.png"}
                                className='img-fluid'
                                alt="Does Your Startup Really Need Investors"
                                width={800}
                                height={200}
                                priority
                            />
                            <div className="card-body">
                                <h5 className="card-title">Does Your Startup Really Need Investors?</h5>
                                <p className="card-text">Securing investment is a major milestone for any startup</p>
                                <Link href="/blog/3-does-your-startup-really-need-investors" target='_blank'>Read more</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-5 pt-3'>
                    <Link href="/blog" className="btn btn-primary btn-lg">Read blog</Link>
                </div>
            </div>
        </section>
    )
}