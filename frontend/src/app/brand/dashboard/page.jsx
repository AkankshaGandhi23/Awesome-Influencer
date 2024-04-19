'use client';
import useBrandContext from '@/context/BrandContext'
import React, { useEffect, useState } from 'react'

const AdminDashboard = () => {

  const { currentBrand } = useBrandContext();
  const [campaignList, setCampaignList] = useState([]);

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

  const displayCampaigns = () => {
    return campaignList.map(campaign => (
      <tr>
        <td className="w-1/3 text-left py-3 px-4">
          <img style={{ height: 100 }} src={`${process.env.NEXT_PUBLIC_API_URL}/${campaign.cover}`} alt="" />
        </td>
        <td className="w-1/3 text-left py-3 px-4">{campaign.title}</td>
        <td className="text-left py-3 px-4">
          {campaign.description}
        </td>
        <td className="text-left py-3 px-4">
          ₹{campaign.incentive}
        </td>
        <td className="text-left py-3 px-4">
          ₹{campaign.followers}
        </td>
        <td className="text-left py-3 px-4">
          {new Date(campaign.lastDate).toLocaleDateString()}
        </td>
      </tr>
    ))
  }


  return (
    <div className="w-full overflow-x-hidden border-t flex flex-col">
      <main className="w-full flex-grow p-6">
        <h1 className="text-3xl text-black pb-6">Dashboard</h1>
        <div className="w-full mt-12">
          <p className="text-xl pb-3 flex items-center">
            <i className="fas fa-list mr-3" /> Latest Reports
          </p>
          <div className="bg-white overflow-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="w-1/6 text-left py-3 px-4 uppercase font-semibold text-sm">
                    Image
                  </th>
                  <th className="w-1/4 text-left py-3 px-4 uppercase font-semibold text-sm">
                    Title
                  </th>
                  <th className="w-1/2 text-left py-3 px-4 uppercase font-semibold text-sm">
                    Description
                  </th>
                  <th className="w-1/6 text-left py-3 px-4 uppercase font-semibold text-sm">
                    Incentive
                  </th>
                  <th className="w-1/6 text-left py-3 px-4 uppercase font-semibold text-sm">
                    Required Followers
                  </th>
                  <th className="w-1/6 text-left py-3 px-4 uppercase font-semibold text-sm">
                    Last Date to Apply
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
      <footer className="w-full bg-white text-right p-4">
        Built by{" "}
        <a target="_blank" href="https://davidgrzyb.com" className="underline">
          David Grzyb
        </a>
        .
      </footer>
    </div>

  )
}

export default AdminDashboard;