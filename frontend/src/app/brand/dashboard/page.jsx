'use client';
import useBrandContext from '@/context/BrandContext'
import { Dialog } from '@headlessui/react';
import React, { useEffect, useState } from 'react'
import ViewCampaign from './ViewCampaign';

const AdminDashboard = () => {

  const { currentBrand } = useBrandContext();
  const [campaignList, setCampaignList] = useState([]);
  const [selCampaign, setSelCampaign] = useState(null);
  let [isOpen, setIsOpen] = useState(false)

  const fetchCampaigns = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/campaign/getbybrand`, {
      headers: {
        'x-auth-token': currentBrand.token
      }
    })
      .then((response) => {
        return response.json()
      })
      .then(data => {
        console.log(data);
        setCampaignList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchCampaigns();
  }, [])

  const getExpiredStatus = (lastDate) => {
    const today = new Date();
    const last = new Date(lastDate);
    return today > last ?
      <span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Expired</span>
      : <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Active</span>;
  }

  const displayCampaigns = () => {
    return campaignList.map(campaign => (
      <tr>
        <td className="w-1/6 text-left py-3 px-4">
          <img style={{ height: 100 }} src={`${process.env.NEXT_PUBLIC_API_URL}/${campaign.cover}`} alt="" />
        </td>
        <td className="w-1/6 text-left py-3 px-4">{campaign.title}</td>
        <td className="w-1/6 text-left py-3 px-4">{getExpiredStatus(campaign.lastDate)}</td>
        <td className="text-left py-3 px-4">
          {campaign.description}
        </td>
        <td className="text-left py-3 px-4">
          ₹{campaign.incentive}
        </td>
        <td className="text-left py-3 px-4">
          {campaign.followers}
        </td>
        <td className="text-left py-3 px-4">
          {new Date(campaign.lastDate).toLocaleDateString()}
        </td>
        <td className="text-left py-3 px-4">
          <button
            onClick={() => { setSelCampaign(campaign); setIsOpen(true) }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >Details</button>
        </td>
      </tr>
    ))
  }


  return (
    <div className="w-full overflow-x-hidden border-t flex flex-col">
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex w-full items-center justify-center p-4">
          <Dialog.Panel className="w-4/5 rounded bg-white">
            <Dialog.Title>Influencers Enrolled</Dialog.Title>

            {selCampaign !== null && <ViewCampaign campaignData={selCampaign} />}

            <button onClick={() => setIsOpen(false)}>Close</button>
          </Dialog.Panel>
        </div>
      </Dialog>
      <main className="w-full flex-grow p-6">
        <h1 className="text-3xl text-black pb-6">Dashboard</h1>
        <div className="w-full mt-12">
          <p className="text-xl pb-3 flex items-center">
            <i className="fas fa-list mr-3" /> Running Campaigns
          </p>
          <div className="bg-white overflow-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="w-1/8 text-left px-4 uppercase font-semibold text-sm">
                    Image
                  </th>
                  <th className="w-1/6 text-left px-4 uppercase font-semibold text-sm">
                    Title
                  </th>
                  <th className="w-1/6 text-left px-4 uppercase font-semibold text-sm">
                    Status
                  </th>
                  <th className="w-1/2 text-left px-4 uppercase font-semibold text-sm">
                    Description
                  </th>
                  <th className="w-1/6 text-left px-4 uppercase font-semibold text-sm">
                    Incentive
                  </th>
                  <th className="w-1/6 text-left px-4 uppercase font-semibold text-sm">
                    Required Followers
                  </th>
                  <th className="w-1/6 text-left px-4 uppercase font-semibold text-sm">
                    Last Date to Apply
                  </th>
                  <th className="w-1/6 text-left px-4 uppercase font-semibold text-sm">

                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">

                {displayCampaigns()}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>

  )
}

export default AdminDashboard;