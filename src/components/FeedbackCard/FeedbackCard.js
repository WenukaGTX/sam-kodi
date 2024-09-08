import Image from "next/image";
import './feedbackCard.scss';

export default function FeedbackCard(props) {
    return (
        <div className="card feedback-card">
            <div className="card-body">
                <div className='user'>
                    <Image
                        src={`/${props.userImage}`}
                        alt={props.username}
                        width={50}
                        height={50}
                        priority
                    />
                    <div className='user-details'>
                        <h5>{props.username}</h5>
                        <p>{props.userDescription}</p>
                    </div>
                </div>
                <p className='feedback-text'>"{props.feedbackText}"</p>
            </div>
        </div>
    )
}