import Link from 'next/link';
import './aboutSection.scss';

export default function AboutSection() {
    return (
        <section className="page-section services bg-white-x">
            <div className='container text-center'>
                <div className="page-header mb-4">
                    <h1>Meet Your Strategic Partner</h1>
                </div>
                <p className='text-center w-75 mx-auto lh-lg para-text'>I'm Sameera Viraj Kodituwakku, an experienced sales leader specializing in elevating tech companies to new heights. With over a decade of leadership in sales and business development, I empower Tech companies to boost their sales, expand their revenue streams, and surpass their current achievements. My expertise extends across SaaS, MSP, and Technical Services domains, ensuring that your business receives comprehensive and customized support designed to drive significant growth.</p>
                <Link href="https://calendly.com/sameeraviraj/30min?month=2024-09" className="btn btn-primary btn-lg mt-4" rel="noopener noreferrer" target="_blank">Schedule a call</Link>
            </div>
        </section>
    )
}