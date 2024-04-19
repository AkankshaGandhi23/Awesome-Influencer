'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const FindCampaign = () => {

    const [campaignList, setCampaignList] = useState([]);
    const [masterList, setMasterList] = useState([]);

    const fetchCampaignData = () => {
        fetch('http://localhost:5000/campaign/getall')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCampaignList(data);
                setMasterList(data);
            });
    }

    useEffect(() => {
        fetchCampaignData();
    }, [])

    const displayCampaigns = () => {
        if(campaignList.length === 0){
            return <h1>No Campaigns Found</h1>
        }else{
            return campaignList.map((campaign) => (
                <Link
                            className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            href={'/view-campaign/'+campaign._id}
                        >
                            <div className="aspect-w-16 aspect-h-11">
                                <img
                                    className="w-full object-cover rounded-xl"
                                    src={'http://localhost:5000/'+ campaign.cover   }
                                    alt="Image Description"
                                />
                            </div>
                            <div className="my-6">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                                    {campaign.title}
                                </h3>
                                <p className="mt-5 text-gray-600 dark:text-gray-400">
                                    {campaign.description}
                                </p>
                            </div>
                            <div className="mt-auto flex items-center gap-x-3">
                                <img
                                    className="size-8 rounded-full"
                                    src={'http://localhost:5000/'+ 'logo-placeholder-image.png'}
                                    alt="Brand Logo"
                                />
                                <div>
                                    <h5 className="text-sm text-gray-800 dark:text-gray-200">
                                        {campaign.brand.name}
                                    </h5>
                                </div>
                            </div>
                        </Link>
            ))
        }
    }

    return (
        <div>
            <>
                {/* Card Blog */}
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    {/* Title */}
                    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                            Find Campaigns
                        </h2>
                        <p className="mt-1 text-gray-600 dark:text-gray-400">
                            Find campaigns that are looking for influencers to promote their products.
                        </p>
                    </div>
                    {/* End Title */}
                    {/* Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">  
                        {displayCampaigns()}
                    </div>
                </div>
                {/* End Card Blog */}
            </>

        </div>
    )
}

export default FindCampaign;