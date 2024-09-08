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
                                src={"/blog/digital-transformation-roadmap-for-success.png"}
                                className='img-fluid'
                                alt="Digital Transformation"
                                width={800}
                                height={200}
                                priority
                            />
                            <div className="card-body">
                                <h5 className="card-title">Digital Transformation: A Roadmap for Success</h5>
                                <p className="card-text">Digital transformation is essential for businesses to remain competitive</p>
                                <Link href="/blog/digital-transformation-roadmap-for-success" target='_blank'>Read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mb-xs-2'>
                        <div className="card feature-card">
                            <Image
                                src={"/blog/rise-of-remote-work-and-impact-on-sales.png"}
                                className='img-fluid'
                                alt="The Rise of Remote Work and Its Impact on Sales"
                                width={800}
                                height={200}
                                priority
                            />
                            <div className="card-body">
                                <h5 className="card-title">The Rise of Remote Work and Its Impact on Sales</h5>
                                <p className="card-text">Remote work is becoming the new norm in today's business landscape</p>
                                <Link href="/blog/rise-of-remote-work-and-impact-on-sales" target='_blank'>Read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card feature-card">
                            <Image
                                src={"/blog/leveraging-ai-for-sales-and-business-development.png"}
                                className='img-fluid'
                                alt="AI for Sales and Business Development"
                                width={800}
                                height={200}
                                priority
                            />
                            <div className="card-body">
                                <h5 className="card-title">Leveraging AI for Sales and Business Development</h5>
                                <p className="card-text">AI is emerging as a game-changer for sales & business development</p>
                                <Link href="/blog/leveraging-ai-for-sales-and-business-development" target='_blank'>Read more</Link>
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