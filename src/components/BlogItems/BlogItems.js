import Link from 'next/link';
import Image from "next/image";
import './blogItems.scss';
import FeedbackCard from '../FeedbackCard/FeedbackCard';

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
                                src={"/blog-img-1.png"}
                                className='img-fluid'
                                alt="blog image"
                                width={800}
                                height={200}
                                priority
                            />
                            <div className="card-body">
                                <h5 className="card-title">Maximizing Sales Efficiency: Strategies for Tech Startups</h5>
                                <p className="card-text">Plan and record journeys even when you're offline forever</p>
                                <Link href="/services">Read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mb-xs-2'>
                        <div className="card feature-card">
                            <Image
                                src={"/blog-img-2.jpg"}
                                className='img-fluid'
                                alt="blog image"
                                width={800}
                                height={200}
                                priority
                            />
                            <div className="card-body">
                                <h5 className="card-title">Leveraging Data Analytics to Drive Sales Growth</h5>
                                <p className="card-text">Plan and record journeys even when you're offline for days</p>
                                <Link href="/services">Read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card feature-card">
                            <Image
                                src={"/blog-img-3.jpg"}
                                className='img-fluid'
                                alt="blog image"
                                width={800}
                                height={200}
                                priority
                            />
                            <div className="card-body">
                                <h5 className="card-title">Building and Leading a High-Performing Sales Team</h5>
                                <p className="card-text">Plan and record journeys even when you're offline</p>
                                <Link href="/services">Read more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}