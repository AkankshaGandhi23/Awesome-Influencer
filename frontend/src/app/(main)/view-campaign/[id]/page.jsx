'use client';
import useAppContext from '@/context/AppContext';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const ViewCampaign = () => {

  const { id } = useParams();
  const [campaignDetails, setCampaignDetails] = useState(null);
  const { currentUser } = useAppContext();

  const fetchCampaign = async () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/campaign/getbyid/${id}`)
      .then((response) => {
        console.log(response.status);
        return response.json();
      })
      .then(data => {
        console.log(data);
        setCampaignDetails(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchCampaign();
  }, [])

  const enroll = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/enroll/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': currentUser.token
      },
      body: JSON.stringify({ campaign: id })
    })
      .then((response) => {
        console.log(response.status);
        return response.json();
      })
      .then(data => {
        console.log(data);
        toast.success('Enrolled successfully');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const checkEnrolled = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/enroll/check-enrolled/${id}`, {
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
        if (data === null) {
          enroll();
        } else {
          toast.error('You are already enrolled in this campaign');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const displayDetails = () => {
    if (campaignDetails === null) return <div>Loading...</div>
    return <div className="relative h-screen">
      <img
        src={`${process.env.NEXT_PUBLIC_API_URL}/${campaignDetails.cover}`}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-opacity-90 bg-blue-700 h-screen">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            {/* <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                The quick, brown fox <br className="hidden md:block" />
                jumps over a lazy dog
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                quae.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div> */}
            <div className="mt-64 w-full xl:px-8">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className='text-3xl'>{campaignDetails.title}</h3>
                <button onClick={checkEnrolled} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Enroll</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }

  return (
    <div>
      {displayDetails()}

      <div className="max-w-sm w-full lg:max-w-full lg:flex">
  <div
    className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
    style={{ backgroundImage: 'url("/img/card-left.jpg")' }}
    title="Woman holding a mug"
  ></div>
  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <p className="text-sm text-gray-600 flex items-center">
        <svg
          className="fill-current text-gray-500 w-3 h-3 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
        </svg>
        Members only
      </p>
      <div className="text-gray-900 font-bold text-xl mb-2">
        Can coffee make you a better developer?
      </div>
      <p className="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
        nihil.
      </p>
    </div>
    <div className="flex items-center">
      &lt; class="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg"
      alt="Avatar of Jonathan Reinink"&gt;
      <div className="text-sm">
        <p className="text-gray-900 leading-none">Jonathan Reinink</p>
        <p className="text-gray-600">Aug 18</p>
      </div>
    </div>
  </div>
</div>

    </div>

  )
}

export default ViewCampaign;