import Link from 'next/link';
import Image from "next/image";
import './feedbacks.scss';
import FeedbackCard from '../FeedbackCard/FeedbackCard';

export default function Feedbacks() {
    return (
        <section className="page-section feedbacks bg-white-x">
            <div className='container'>
                <div className="page-header">
                    <h1>Reviews & Feedbacks</h1>
                    <p>Quotes & thoughts from satisfied clients</p>
                </div>
                <div className='row'>
                    <div className='col-md-4 mb-xs-2'>
                        <FeedbackCard
                            userImage='user-1.jpg'
                            username='Kasun Rajakaruna'
                            userDescription='Residential Interior Design'
                            feedbackText="Our experience with LA7 was nothing short of exceptional. From the initial consultation to the final reveal."
                        />
                    </div>
                    <div className='col-md-4 mb-xs-2'>
                        <FeedbackCard
                            userImage='user-2.jpg'
                            username='Keshani Thenuwara'
                            userDescription='Commercial Space Design'
                            feedbackText="As a small business owner, I needed a commercial space that was both functional and inspiring. LA7 took the time to understand my brand and designed it."
                        />
                    </div>
                    <div className='col-md-4'>
                        <FeedbackCard
                            userImage='user-3.jpg'
                            username='Sahan Yahampath'
                            userDescription='Kitchen & Bath Design'
                            feedbackText="We approached LA7 for a complete renovation of our outdated bathroom. The team’s expertise in space planning and design is extraordinary."
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}