import Image from "next/image";
import './partners.scss';

export default function Partners() {
    return (
        <section className="page-section bg-grey">
            <div className='container'>
                <div className="page-header">
                    <h1>Partners & Brands</h1>
                    <p>Bringing the expertise into your choice</p>
                </div>
                <div className='partner-logos'>
                    <Image
                        src="https://static.learnwithhomer.com/deployedassets/f8d08c6e/static/img/modules/asSeenIn/Forbes.svg"
                        alt="Forbes logo"
                        width={150}
                        height={40}
                        priority
                    />
                    <Image
                        src="https://uptime.app/img/home-page/brands/audible.svg"
                        alt="Forbes logo"
                        width={169}
                        height={70}
                        priority
                    />
                    <Image
                        src="https://uptime.app/img/home-page/brands/hulu.svg"
                        alt="Forbes logo"
                        width={125}
                        height={40}
                        priority
                    />
                    <Image
                        src="https://uptime.app/img/home-page/brands/netflix.svg"
                        alt="Forbes logo"
                        width={142}
                        height={40}
                        priority
                    />
                </div>
            </div>
        </section>
    )
}