import Link from 'next/link';
import Image from "next/image";
import './portfolioCard.scss';

export default function PortfolioCard(props) {
    return (
        <Link href="/" className="card text-bg-dark portfolio-card">
            <Image
                src={`/${props.image}`}
                className='portfolio-card-img'
                alt={props.title}
                width={800}
                height={300}
                priority
            />
            <div className="card-img-overlay">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.subtitle}</p>
            </div>
        </Link>
    )
}