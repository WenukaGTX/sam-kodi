import Link from 'next/link';
import Image from "next/image";
import './serviceItems.scss';

export default function ServiceItems2() {
    return (
        <section className="page-section services bg-white-x">
            <div className='container text-center'>
                <div className="page-header">
                    <h1>Streamline Your Operations</h1>
                    <p>Enhance efficiency, optimize the bottom line, & drive sustainable growth</p>
                </div>
                <div className='row'>
                    <div className='col-md-6 mb-4 mb-xs-4'>
                        <div className='info-item horizontal-item'>
                            <Image
                                src="/icons/ri_customer-service-2-line.svg"
                                alt="Home design icon"
                                width={60}
                                height={60}
                                priority
                            />
                            <div className='info-item-details'>
                                <h5>Customer Service Manager Augmentation</h5>
                                <p>Delivering outsourced customer success managers to enhance your customer service operations</p>
                                {/* <Link href="/services">Read more</Link> */}
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 mb-4 mb-xs-4'>
                        <div className='info-item horizontal-item'>
                            <Image
                                src="/icons/ant-design_bulb-outlined.svg"
                                alt="Home design icon"
                                width={60}
                                height={60}
                                priority
                            />
                            <div className='info-item-details'>
                                <h5>Operational Enhancement Consultancy</h5>
                                <p>Offering strategies to improve overall operational efficiency and effectiveness</p>
                                {/* <Link href="/services">Read more</Link> */}
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 mb-4 mb-xs-4'>
                        <div className='info-item horizontal-item'>
                            <Image
                                src="/icons/fluent_people-team-add-20-regular.svg"
                                alt="Home design icon"
                                width={60}
                                height={60}
                                priority
                            />
                            <div className='info-item-details'>
                                <h5>Tech Staff Augmentation</h5>
                                <p>Providing top-tier tech talent to supplement your existing teams</p>
                                {/* <Link href="/services">Read more</Link> */}
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='info-item horizontal-item'>
                            <Image
                                src="/icons/streamline_customer-support-1.svg"
                                alt="Home design icon"
                                width={60}
                                height={60}
                                priority
                            />
                            <div className='info-item-details'>
                                <h5>Technical Call Center Augmentation</h5>
                                <p>Providing 24x7x365 call center augmentation services to ensure continuous support for your clients</p>
                                {/* <Link href="/services">Read more</Link> */}
                            </div>
                        </div>
                    </div>
                </div>
                <Link href="https://calendly.com/sameeraviraj/30min?month=2024-09" className="btn btn-primary btn-lg mt-5" rel="noopener noreferrer" target="_blank">Get in touch</Link>
            </div>
        </section>
    )
}