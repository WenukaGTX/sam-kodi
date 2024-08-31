import Link from 'next/link';
import Image from "next/image";
import './serviceItems.scss';

export default function ServiceItems1() {
    return (
        <section className="page-section services bg-white-x">
            <div className='container'>
                <div className="page-header">
                    <h1>Maximize Business Conversions</h1>
                    <p>Optimize every aspect of your business to turn visitors into loyal customers</p>
                </div>
                <div className='row'>
                    <div className='col-md-4 mb-xs-2'>
                        <div className='info-item'>
                            <Image
                                src="/icons/solar_home_light.svg"
                                alt="Home design icon"
                                width={60}
                                height={60}
                                priority
                            />
                            <h5>Fractional Sales Leadership</h5>
                            <p>Focused on driving and increasing revenue through strategic leadership and management</p>
                            <Link href="/services">Read more</Link>
                        </div>
                    </div>
                    <div className='col-md-4 mb-xs-2'>
                        <div className='info-item'>
                            <Image
                                src="/icons/solar_sofa-2_light.svg"
                                alt="Home design icon"
                                width={60}
                                height={60}
                                priority
                            />
                            <h5>Sales Team Training, Coaching, & Recruiting</h5>
                            <p>Empowering your team with the skills needed for success and providing recruitment strategies to build a high-performing sales force</p>
                            <Link href="/services">Read more</Link>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='info-item'>
                            <Image
                                src="/icons/solar_display_light.svg"
                                alt="Home design icon"
                                width={60}
                                height={60}
                                priority
                            />
                            <h5>Sales Operations Optimization</h5>
                            <p>Enhancing the efficiency and effectiveness of your sales processes through targeted optimizations</p>
                            <Link href="/services">Read more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}