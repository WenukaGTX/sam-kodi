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
                        src="/la7-logo.jpg"
                        alt="LA7 Logo"
                        width={74}
                        height={50}
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
                        <li className="nav-item">
                            <Link href="/about" className="nav-link">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/services" className="nav-link">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/projects" className="nav-link">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/blog" className="nav-link">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact" className="nav-link">Contact</Link>
                        </li>
                        {/* <li className="nav-item text-center">
                            <Link href="/contact" className="btn btn-primary">Get in touch</Link>
                        </li> */}
                        {/* <li className="nav-item">
                            <ThemeToggle />
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}