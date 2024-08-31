import Image from "next/image";
import Link from 'next/link';
import './banner.scss';
import background from '../../../public/banner-1.jpg';

export default function Banner() {
    return (
        <section className="banner" style={{ backgroundImage: `url(${background.src})` }}>
            <div className="container">
                <Image
                    src="/sam-kodi-portrait-1.png"
                    alt="Banner avatar"
                    width={313}
                    height={450}
                    priority
                    className="banner-image"
                />
                <div class="banner-right">
                    <h1>Transform Your Business with Fractional CRO Expertise Tailored for Success</h1>
                    <p>Driving Growth and Refining Business Practices <br className="d-none d-sm-block"/>Through Advanced Sales Approaches</p>
                    <Link href="/contact" className="btn btn-primary btn-lg">Get in touch</Link>
                </div>
            </div>
        </section>
    )
}