import Image from "next/image";
import Link from 'next/link';
import './bannerMini.scss';
// import background from '../../../public/banner-2.jpg';

export default function BannerMini(props) {
    const background = `/${props.background}`;

    return (
        <section className="banner-min" style={{ backgroundImage: `url(${background})` }}>
            <div className="container">
                <h1>{props.title}</h1>
            </div>
        </section>
    )
}