import Image from "next/image";
import Link from 'next/link';
import './footer.scss';

export default function Footer() {
    return (
        <footer className="footer bg-dark text-white">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    {/* <h4 className="footer-title mb-0">Enki</h4> */}
                    <Image
                        src="/Enki_logo.svg"
                        alt="Enki logo"
                        width={122}
                        height={48}
                        priority
                    />
                    <Link href="https://www.linkedin.com/in/sameeraviraj/" target='_blank'>Linkedin</Link>
                </div>
                {/* <div className="row">
                    <div className="col-md-3">
                        <ul>
                            <li>Links</li>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/case-studies">Case Studeis</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/faq">FAQs</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul>
                            <li>Company</li>
                            <li><Link href="/press">Press</Link></li>
                            <li><Link href="/careers">Careers</Link></li>
                            <li><Link href="/careers">Brand Use</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul>
                            <li>Social media</li>
                            <li><Link href="https://www.linkedin.com/in/sameeraviraj/" target='_blank'>Linkedin</Link></li>
                            <li><Link href="/">Facebook</Link></li>
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
                </div> */}
                <div className="footer-bottom">
                    <p className="text-center"><b>Made in Sri Lanka</b> • Copyright © 2024 Enki. All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}