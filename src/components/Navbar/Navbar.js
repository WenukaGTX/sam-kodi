import Image from "next/image";
import Link from 'next/link';
import './navbar.scss';
import ThemeToggle from '../ThemeToggle';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-transparent">
            <div className="container">
                <Link href="/" className="navbar-brand">
                    <Image
                        src="/Enki_logo.svg"
                        alt="Enki logo"
                        width={122}
                        height={48}
                        priority
                    />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/" className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link href="/about" className="nav-link">About</Link>
                        </li> */}
                        {/* <li className="nav-item">
                            <Link href="/services" className="nav-link">Services</Link>
                        </li> */}
                        {/* <li className="nav-item">
                            <Link href="/case-studies" className="nav-link">Case Studies</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link href="/blog" className="nav-link">Blog</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link href="/faq" className="nav-link">FAQs</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link href="/contact" className="nav-link">Contact</Link>
                        </li>
                        <li className="nav-item text-center">
                            <Link href="https://calendly.com/sameeraviraj/30min?month=2024-09" className="btn btn-primary" rel="noopener noreferrer" target="_blank">Get in touch</Link>
                        </li>
                        {/* <li className="nav-item">
                            <ThemeToggle />
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}