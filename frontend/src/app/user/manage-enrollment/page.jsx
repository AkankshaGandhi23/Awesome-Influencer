'use client';
import useAppContext from '@/context/AppContext';
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar';

const ManageEnrollment = () => {

    const [enrollList, setEnrollList] = useState([]);
    const { currentUser } = useAppContext();

    const [selEnrollment, setSelEnrollment] = useState(null);

    const fetchEnrollList = async () => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/enroll/getbyinfluencer`, {
            headers: {
                'x-auth-token': currentUser.token
            }
        })
            .then((response) => {
                console.log(response.status);
                return response.json();
            })
            .then(data => {
                console.log(data);
                setEnrollList(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchEnrollList();
    }, [])

    const displayEnrollList = () => {
        return
    }

    // const 

    const displayEnrollment = () => {
        if (selEnrollment !== null) {
            return (
                <div>
                    <h1>{selEnrollment.campaign.name}</h1>
                    <h1>{selEnrollment.campaign.description}</h1>
                    <h1>{selEnrollment.campaign.incentive}</h1>
                    <h1>{selEnrollment.campaign.lastDate}</h1>
                </div>
            )
        } else {
            return <h3>Select a Campaign</h3>
        }
    }

    return (
        <div className='bg-gray-100 font-family-karla flex'>
            <Sidebar items={enrollList} setSelEnrollment={setSelEnrollment} selEnrollment={selEnrollment} />
            <div className='p-10'>
                {displayEnrollment()}
            </div>
        </div>
    )
}

export default ManageEnrollment;