import Link from 'next/link';
import Image from "next/image";
import './serviceItems.scss';

export default function ServiceItems() {
    return (
        <section className="page-section services bg-white-x">
            <div className='container'>
                <div className="page-header">
                    <h1>Signature Services</h1>
                    <p>Curated interior design services for every unique need</p>
                </div>
                <div className='row'>
                    <div className='col-md-3 mb-xs-2'>
                        <div className='info-item'>
                            <Image
                                src="/icons/solar_home_light.svg"
                                alt="Home design icon"
                                width={60}
                                height={60}
                                priority
                            />
                            <h5>Home Design & Styling</h5>
                            <p>Creating comfortable & stylish living spaces</p>
                            <Link href="/services">Read more</Link>
                        </div>
                    </div>
                    <div className='col-md-3 mb-xs-2'>
                        <div className='info-item'>
                            <Image
                                src="/icons/solar_sofa-2_light.svg"
                                alt="Home design icon"
                                width={60}
                                height={60}
                                priority
                            />
                            <h5>Commercial Spaces</h5>
                            <p>Crafting functional & inspiring workplaces</p>
                            <Link href="/services">Read more</Link>
                        </div>
                    </div>
                    <div className='col-md-3 mb-xs-2'>
                        <div className='info-item'>
                            <Image
                                src="/icons/solar_display_light.svg"
                                alt="Home design icon"
                                width={60}
                                height={60}
                                priority
                            />
                            <h5>Virtual Designing</h5>
                            <p>Bringing expert interior design to anywhere</p>
                            <Link href="/services">Read more</Link>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='info-item'>
                            <Image
                                src="/icons/solar_paint_roller_light.svg"
                                alt="Home design icon"
                                width={60}
                                height={60}
                                priority
                            />
                            <h5>Renovation & Repair</h5>
                            <p>Transforming spaces through renovation</p>
                            <Link href="/services">Read more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}