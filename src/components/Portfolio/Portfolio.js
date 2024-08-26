import Link from 'next/link';
import Image from "next/image";
import './portfolio.scss';
import PortfolioCard from '../PortfolioCard/PortfolioCard';

export default function Portfolio() {
    return (
        <section className="page-section portfolio bg-grey">
            <div className='container'>
                <div className="page-header">
                    <h1>Design Portfolio</h1>
                    <p>Innovative & customized solutions for every space</p>
                </div>
                <div className='row'>
                    <div className='col-md-8'>
                        <PortfolioCard
                            image='portfolio-image-1.jpg'
                            title='Fort Heritage'
                            subtitle='Galle Fort'
                        />
                    </div>
                    <div className='col-md-4'>
                        <PortfolioCard
                            image='portfolio-image-2.jpg'
                            title='Bastille Restaurant'
                            subtitle='Kirulapone'
                        />
                    </div>
                    <div className='col-md-4'>
                        <PortfolioCard
                            image='portfolio-image-3.jpg'
                            title='The Pasta Factory'
                            subtitle='Nawala'
                        />
                    </div>
                    <div className='col-md-4'>
                        <PortfolioCard
                            image='portfolio-image-4.jpg'
                            title='The Arch'
                            subtitle='Wellawatte'
                        />
                    </div><div className='col-md-4'>
                        <PortfolioCard
                            image='portfolio-image-5.jpg'
                            title='The Bungalow'
                            subtitle='Battaramulla'
                        />
                    </div>
                    <div className='col-md-4'>
                        <PortfolioCard
                            image='portfolio-image-6.jpg'
                            title='Monarch Imperial'
                            subtitle='Thalawathugoda'
                        />
                    </div>
                    <div className='col-md-8'>
                        <PortfolioCard
                            image='portfolio-image-7.jpg'
                            title='Sturgeon Restaurant & Bar'
                            subtitle='Mount Lavinia'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}