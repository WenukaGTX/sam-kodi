import Link from 'next/link';
import Image from "next/image";
import './serviceItems.scss';

export default function ServiceItems1() {
    return (
        <section className="page-section services bg-white-x">
            <div className='container text-center'>
                <div className="page-header">
                    <h1>Increase Revenue</h1>
                    <p>Core services designed to elevate your sales performance</p>
                </div>
                <div className='row'>
                    <div className='col-md-4 mb-xs-4'>
                        <div className='info-item'>
                            <Image
                                src="/icons/bi_bar-chart.svg"
                                alt="Bar chart icon"
                                width={60}
                                height={60}
                                priority
                            />
                            <h5>Fractional Sales Leadership</h5>
                            <p>Focused on driving and increasing revenue through strategic leadership and management</p>
                            {/* <Link href="/services">Read more</Link> */}
                        </div>
                    </div>
                    <div className='col-md-4 mb-xs-4'>
                        <div className='info-item'>
                            <Image
                                src="/icons/fluent_people-team-24-regular.svg"
                                alt="Team icon"
                                width={60}
                                height={60}
                                priority
                            />
                            <h5>Sales Team Training, Coaching, & Recruiting</h5>
                            <p>Empowering your team with the skills needed for success and providing recruitment strategies to build a high-performing sales force</p>
                            {/* <Link href="/services">Read more</Link> */}
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='info-item'>
                            <Image
                                src="/icons/fluent_flowchart-16-regular.svg"
                                alt="Flow chart icon"
                                width={60}
                                height={60}
                                priority
                            />
                            <h5>Sales Operations Optimization</h5>
                            <p>Enhancing the efficiency and effectiveness of your sales processes through targeted optimizations</p>
                            {/* <Link href="/services">Read more</Link> */}
                        </div>
                    </div>
                </div>
                <Link href="https://calendly.com/sameeraviraj/30min?month=2024-09" className="btn btn-primary btn-lg mt-5" rel="noopener noreferrer" target="_blank">Schedule a call</Link>
            </div>
        </section>
    )
}