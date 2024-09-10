import Image from "next/image";
import Link from 'next/link';
import './banner.scss';

export default function Banner() {
    return (
        <section className="banner">
            <div className="container">
                <Image
                    src="/sam-kodi-portrait-1.jpg"
                    alt="Banner avatar"
                    width={313}
                    height={450}
                    priority
                    className="banner-image"
                />
                <div className="banner-right">
                    <h1>Transform Your Business with Fractional CRO Services Tailored for Success</h1>
                    <p>Driving Growth & Refining Business Practices <br className="d-none d-sm-block" />Through Advanced Sales & business Approaches</p>
                    <Link href="https://calendly.com/sameeraviraj/30min?month=2024-09" className="btn btn-primary btn-lg" rel="noopener noreferrer" target="_blank">Schedule a call</Link>
                </div>
            </div>
        </section>
    )
}