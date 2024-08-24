import Image from "next/image";
import Link from 'next/link';
import './banner.scss';
import background from '../../../public/banner-1.jpg';

export default function Banner() {
    return (
        <section className="banner" style={{ backgroundImage: `url(${background.src})` }}>
            <div className="container">
                <h1>Where design dreams come to life</h1>
                <Link href="/contact" className="btn btn-primary">Get in touch</Link>
            </div>
        </section>
    )
}