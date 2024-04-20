import React, { useEffect, useState } from 'react'

const ViewCampaign = ({ campaignData }) => {

    const [enrollmentData, setEnrollmentData] = useState([]);

    const getEnrollmentData = () => {
        fetch('http://localhost:5000/enroll/getbycampaign/' + campaignData._id)
            .then((response) => {
                return response.json()
            })
            .then(data => {
                console.log(data);
                setEnrollmentData(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        getEnrollmentData();
    }, [campaignData._id])

    const displayInfluencers = () => {
        if (enrollmentData.length === 0) {
            return <h4 className='text-center my-10 text-slate-900 font-bold'>No Influencers Enrolled</h4>
        } else {
            return enrollmentData.map(enrollment => (
                <div className='flex items-center justify-between border-b border-gray-200 py-4'>
                    <div className='flex items-center'>
                        <img src={`https://www.shutterstock.com/image-vector/headshot-line-icon-avatar-placeholder-600nw-2271295455.jpg`} alt="" className='w-12 h-12 object-cover rounded-full' />
                        <div className='ml-4'>
                            <h4 className='text-lg font-semibold'>{enrollment.influencer.name}</h4>
                            <p className='text-sm text-gray-500'>{enrollment.influencer.email}</p>
                        </div>
                    </div>
                    {/* <div>
                        <button className='bg-blue-500 text-white px-4 py-2 rounded'>View Profile</button>
                    </div> */}
                </div>
            ))
        }
    }

    return (
        <div className='p-10 w-4/5'>
            <h1 className='text-3xl text-black mb-5'>Indluncers Enrolled</h1>
            {displayInfluencers()}
        </div>
    )
}

export default ViewCampaign