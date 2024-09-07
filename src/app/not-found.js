import Link from 'next/link';

export default function NotFound() {
    return (
        <div className='not-found'>
            <div>
                <div className='d-flex align-items-center mb-4'>
                    <h2 className='mb-0'>404</h2>
                    <div className='mx-2'>-</div>
                    <p className='mb-0'>This page could not be found</p>
                </div>
                <Link className='btn btn-primary' href="/">Return Home</Link>
            </div>
        </div>
    )
}