import Image from "next/image";
import Link from 'next/link';
import './footer.scss';

export default function Footer() {
    return (
        <footer className="footer bg-dark text-white">
            <div className="container">
                <h4 className="footer-title">
                    <Image
                        src="/la7-logo.jpg"
                        alt="LA7 Logo"
                        width={47}
                        height={32}
                        priority
                    />
                </h4>
                <div className="row">
                    <div className="col-md-3">
                        <ul>
                            <li>Links</li>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About us</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/projects">Projects</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul>
                            <li>Company</li>
                            <li><Link href="/about">Who we are</Link></li>
                            <li><Link href="/press">Press</Link></li>
                            <li><Link href="/careers">Careers</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul>
                            <li>Social media</li>
                            <li><Link href="https://www.facebook.com/LA7IS">Facebook</Link></li>
                            <li><Link href="/">Instagram</Link></li>
                            <li><Link href="/">YouTube</Link></li>
                            <li><Link href="/">TikTok</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul>
                            <li>Legal</li>
                            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link href="/terms">Terms & Conditions</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="text-center"><b>Made in Sri Lanka</b> • Copyright © 2024 LA7 Interior Studio. All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}