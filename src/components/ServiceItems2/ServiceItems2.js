import Link from 'next/link';
import Image from "next/image";
import './serviceItems.scss';

export default function ServiceItems2() {
    return (
        <section className="page-section services bg-white-x">
            <div className='container'>
                <div className="page-header">
                    <h1>Streamline Your Operations</h1>
                    <p>Enhance efficiency & drive sustainable growth with expert operational support</p>
                </div>
                <div className='row'>
                    <div className='col-md-6 mb-4'>
                        <div className='info-item horizontal-item'>
                            <Image
                                src="/icons/solar_home_light.svg"
                                alt="Home design icon"
                                width={60}
                                height={60}
                                priority
                            />
                            <div className='info-item-details'>
                                <h5>Lean SaaS Consultancy</h5>
                                <p>Specializing in optimizing SaaS models for efficiency and growth</p>
                                <Link href="/services">Read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 mb-4'>
                        <div className='info-item horizontal-item'>
                            <Image
                                src="/icons/solar_sofa-2_light.svg"
                                alt="Home design icon"
                                width={60}
                                height={60}
                                priority
                            />
                            <div className='info-item-details'>
                                <h5>Operational Enhancement Consultancy</h5>
                                <p>Offering strategies to improve overall operational efficiency and effectiveness</p>
                                <Link href="/services">Read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 mb-4'>
                        <div className='info-item horizontal-item'>
                            <Image
                                src="/icons/solar_display_light.svg"
                                alt="Home design icon"
                                width={60}
                                height={60}
                                priority
                            />
                            <div className='info-item-details'>
                                <h5>Customer Service Manager Augmentation</h5>
                                <p>Delivering outsourced customer success managers to enhance your customer service operations</p>
                                <Link href="/services">Read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 mb-4'>
                        <div className='info-item horizontal-item'>
                            <Image
                                src="/icons/solar_display_light.svg"
                                alt="Home design icon"
                                width={60}
                                height={60}
                                priority
                            />
                            <div className='info-item-details'>
                                <h5>Tech Staff Augmentation</h5>
                                <p>Providing top-tier tech talent to supplement your existing teams</p>
                                <Link href="/services">Read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='info-item horizontal-item'>
                            <Image
                                src="/icons/solar_display_light.svg"
                                alt="Home design icon"
                                width={60}
                                height={60}
                                priority
                            />
                            <div className='info-item-details'>
                                <h5>Technical Call Center Augmentation</h5>
                                <p>Providing 24x7x365 call center augmentation services to ensure continuous support for your clients</p>
                                <Link href="/services">Read more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}