import Link from 'next/link';
import Image from "next/image";
import './services.scss';

export default function Services() {
    return (
        <section className="page-section services">
            <div className='container'>
                <div className="page-header">
                    <h1>Signature Services</h1>
                    <p>Curated interior design services for every unique need</p>
                </div>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='info-item'>
                            <Image
                                src="/icons/solar_home-linear.svg"
                                alt="Home design icon"
                                width={70}
                                height={70}
                                priority
                            />
                            <h3>Home Design & Styling</h3>
                            <p>Creating comfortable & stylish living spaces</p>
                            <Link href="/services">Read more</Link>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='info-item'>
                            <Image
                                src="/icons/solar_sofa-2-linear.svg"
                                alt="Home design icon"
                                width={70}
                                height={70}
                                priority
                            />
                            <h3>Commercial Space Design</h3>
                            <p>Crafting functional & inspiring workplaces</p>
                            <Link href="/services">Read more</Link>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='info-item'>
                            <Image
                                src="/icons/solar_display-linear.svg"
                                alt="Home design icon"
                                width={70}
                                height={70}
                                priority
                            />
                            <h3>Virtual Design Consultations</h3>
                            <p>Bringing expert interior design to anywhere</p>
                            <Link href="/services">Read more</Link>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='info-item'>
                            <Image
                                src="/icons/solar_paint-roller-outline.svg"
                                alt="Home design icon"
                                width={70}
                                height={70}
                                priority
                            />
                            <h3>Renovation & Remodeling</h3>
                            <p>Transforming spaces through renovation</p>
                            <Link href="/services">Read more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}