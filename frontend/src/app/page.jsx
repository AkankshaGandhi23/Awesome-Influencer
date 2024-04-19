import React from 'react'
import Navbar from './(main)/navbar'
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <Navbar />

      <>
        {/* Hero */}
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
            <div>
              <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
                Find your perfect Influencer match <span className="text-blue-600">From Shoutouts to Sellouts</span>
              </h1>
              <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
                Are you an entrepreneur looking for influencers to promote your brand.
                This service can help you find the perfect match for your needs...
              </p>
              {/* Buttons */}
              <div>
                <p className='font-extrabold text-green-300 py-5 text-lg'>Are you an Influencer</p>
                </div>

              <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                <a
                  className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  href="/signup"
                >
                  Signup
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
                
                <a
              className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
                  href="/login"
                >
                  Login
                </a>
              </div>
              {/* End Buttons */}
              
            </div>
            {/* End Col */}
            <div className="relative ms-4">
              <img
                className="w-full rounded-md"
                src="https://lh6.googleusercontent.com/proxy/QgEuMrsUyJc_QixL3Os1HAuvCg3yt6sffJv5YRusxnU2meWKFajcHGs1vepRvKuXsgi2Lx-nMXG4qttMzqEMD3Ak0_yswfzvjXSw5Dceg71TJ88CH2tiIcWYsne7PFDxHOfozwexCzUEcu01KqQ0xt816fBgqcFCsklX1DffvmHoKR8WRsnxSP6NkvDKqXgp-9AJHCmhzFwf=w1200-h630-p-k-no-nu"
                alt="Image Description"
              />
              <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0" />
              {/* SVG*/}
              <div className="absolute bottom-0 start-0">
                <svg
                  className="w-2/3 ms-auto h-auto text-white dark:text-slate-900"
                  width={630}
                  height={451}
                  viewBox="0 0 630 451"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x={531} y={352} width={99} height={99} fill="currentColor" />
                  <rect x={140} y={352} width={106} height={99} fill="currentColor" />
                  <rect x={482} y={402} width={64} height={49} fill="currentColor" />
                  <rect x={433} y={402} width={63} height={49} fill="currentColor" />
                  <rect x={384} y={352} width={49} height={50} fill="currentColor" />
                  <rect x={531} y={328} width={50} height={50} fill="currentColor" />
                  <rect x={99} y={303} width={49} height={58} fill="currentColor" />
                  <rect x={99} y={352} width={49} height={50} fill="currentColor" />
                  <rect x={99} y={392} width={49} height={59} fill="currentColor" />
                  <rect x={44} y={402} width={66} height={49} fill="currentColor" />
                  <rect x={234} y={402} width={62} height={49} fill="currentColor" />
                  <rect x={334} y={303} width={50} height={49} fill="currentColor" />
                  <rect x={581} width={49} height={49} fill="currentColor" />
                  <rect x={581} width={49} height={64} fill="currentColor" />
                  <rect x={482} y={123} width={49} height={49} fill="currentColor" />
                  <rect x={507} y={124} width={49} height={24} fill="currentColor" />
                  <rect x={531} y={49} width={99} height={99} fill="currentColor" />
                </svg>
              </div>
              {/* End SVG*/}
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Hero */}
      </>

      <>
      
      { /*second section*/}
  {/* Features */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div className="aspect-w-16 aspect-h-7">
      
<img
        className="w-50 object-cover rounded-xl"
        src="https://www.reachx.de/uploads/titelbild-zukunft-influencer-marketing.jpg"
        alt="Image Description"
      />

<img
        className="w-48 object-cover rounded-xl"
        src=" "
        alt=""
      />

    </div>
    {/* Grid */}
    <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
      <div className="lg:col-span-1">
        <h2 className="font-bold text-2xl md:text-3xl text-gray-800 dark:text-gray-200">
          We tackle the challenges Influencers face
        </h2>
        <h2>The Influencers Playground</h2>
        <p className="mt-2 md:mt-4 text-gray-500">
        We understand the influencer hustle. You juggle content creation, building relationships with brands, and staying ahead of trends, all while navigating online scrutiny. That's why we exist. We tackle the challenges you face by streamlining collaboration, ensuring fair compensation, and providing resources to help you shine. We empower you to focus on what you do best: create and connect.
        </p>
      </div>
      {/* End Col */}
      <div className="lg:col-span-2">
        <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
          {/* Icon Block */}
          <div className="flex gap-x-5">
            <svg
              className="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width={18} height={10} x={3} y={11} rx={2} />
              <circle cx={12} cy={5} r={2} />
              <path d="M12 7v4" />
              <line x1={8} x2={8} y1={16} y2={16} />
              <line x1={16} x2={16} y1={16} y2={16} />
            </svg>
            <div className="grow">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Creative minds
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
              A creative mind isn't just about trends, it's about pushing boundaries and sparking inspiration. Join me as we explore new ideas and unlock the power of imagination!
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="flex gap-x-5">
            <svg
              className="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 10v12" />
              <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
            </svg>
            <div className="grow">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Brand Partnership Showcase
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
              Dive in! Explore my latest collabs with inspiring brands I truly love.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="flex gap-x-5">
            <svg
              className="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            <div className="grow">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Profile Customization 
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
              Make your space your own! Customize your profile to reflect your unique style and interests.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="flex gap-x-5">
            <svg
              className="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx={9} cy={7} r={4} />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <div className="grow">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Content Creation Tools
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
              Unleash your inner influencer! Discover the best tools for editing, filming, and creating killer content.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
        </div>
      </div>
      {/* End Col */}
    </div>
    {/* End Grid */}
  </div>
  {/* End Features */}
</>

{/*third section*/}

<>
  
<>
  {/* Features */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div className="relative p-6 md:p-16">
      {/* Grid */}
      <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
        <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
          <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-neutral-200">
            Brand Features
          </h2>
          {/* Tab Navs */}
          <nav
            className="grid gap-4 mt-5 md:mt-10"
            aria-label="Tabs"
            role="tablist"
          >
            <button
              type="button"
              className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 active"
              id="tabs-with-card-item-1"
              data-hs-tab="#tabs-with-card-1"
              aria-controls="tabs-with-card-1"
              role="tab"
            >
              <span className="flex">
                <svg
                  className="flex-shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                  <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                  <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                  <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                  <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                </svg>
                <span className="grow ms-6">
                  <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
                    Campaign Launch 
                  </span>
                  <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">
                  Calling all collaborators! My next brand campaign is here. Let's create something amazing together.
                  </span>
                </span>
              </span>
            </button>
            <button
              type="button"
              className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700"
              id="tabs-with-card-item-2"
              data-hs-tab="#tabs-with-card-2"
              aria-controls="tabs-with-card-2"
              role="tab"
            >
              <span className="flex">
                <svg
                  className="flex-shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m12 14 4-4" />
                  <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                </svg>
                <span className="grow ms-6">
                  <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
                    Campaign Management
                  </span>
                  <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">
                  Level up your brand! We craft & manage impactful influencer campaigns that drive results. Partner with us!
                  </span>
                </span>
              </span>
            </button>
            <button
              type="button"
              className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700"
              id="tabs-with-card-item-3"
              data-hs-tab="#tabs-with-card-3"
              aria-controls="tabs-with-card-3"
              role="tab"
            >
              <span className="flex">
                <svg
                  className="flex-shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  <path d="M5 3v4" />
                  <path d="M19 17v4" />
                  <path d="M3 5h4" />
                  <path d="M17 19h4" />
                </svg>
                <span className="grow ms-6">
                  <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
                  Smart dashboards
                  </span>
                  <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">
                  Level up your brand game! My dashboard unlocks insights to connect with your audience and amplify results.
                  </span>
                </span>
              </span>
            </button>
          </nav>
          {/* End Tab Navs */}
        </div>
        {/* End Col */}
        <div className="lg:col-span-6">
          <div className="relative">
            {/* Tab Content */}
            <div>
              <div
                id="tabs-with-card-1"
                role="tabpanel"
                aria-labelledby="tabs-with-card-item-1"
              >
                <img
                  className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                  src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                  alt="Image Description"
                />
              </div>
              <div
                id="tabs-with-card-2"
                className="hidden"
                role="tabpanel"
                aria-labelledby="tabs-with-card-item-2"
              >
                <img
                  className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                  src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                  alt="Image Description"
                />
              </div>
              <div
                id="tabs-with-card-3"
                className="hidden"
                role="tabpanel"
                aria-labelledby="tabs-with-card-item-3"
              >
                <img
                  className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                  src="https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                  alt="Image Description"
                />
              </div>
            </div>
            {/* End Tab Content */}
            {/* SVG Element */}
            <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
              <svg
                className="w-16 h-auto text-orange-500"
                width={121}
                height={135}
                viewBox="0 0 121 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                  stroke="currentColor"
                  strokeWidth={10}
                  strokeLinecap="round"
                />
                <path
                  d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                  stroke="currentColor"
                  strokeWidth={10}
                  strokeLinecap="round"
                />
                <path
                  d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                  stroke="currentColor"
                  strokeWidth={10}
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {/* End SVG Element */}
          </div>
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
      {/* Background Color */}
      <div className="absolute inset-0 grid grid-cols-12 size-full">
        <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-neutral-800" />
      </div>
      {/* End Background Color */}
    </div>
  </div>
  {/* End Features */}
</>

{/*Fourth Section*/}

<>
  {/* Testimonials */}
  <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    {/* Blockquote */}
    <blockquote className="text-center lg:mx-auto lg:w-3/5">
      
      <div className="mt-6 lg:mt-10">
        <p className="relative text-xl sm:text-2xl md:text-3xl md:leading-normal font-medium text-gray-800">
          <svg
            className="absolute top-0 start-0 transform -translate-x-8 -translate-y-8 size-16 text-gray-200 sm:h-24 sm:w-24 dark:text-gray-700"
            width={16}
            height={13}
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M7.18079 9.25611C7.18079 10.0101 6.93759 10.6211 6.45119 11.0891C5.96479 11.5311 5.35039 11.7521 4.60799 11.7521C3.71199 11.7521 2.96958 11.4531 2.38078 10.8551C1.81758 10.2571 1.53598 9.39911 1.53598 8.28111C1.53598 7.08511 1.86878 5.91511 2.53438 4.77111C3.22559 3.60111 4.18559 2.67811 5.41439 2.00211L6.29759 3.36711C5.63199 3.83511 5.09439 4.35511 4.68479 4.92711C4.30079 5.49911 4.04479 6.16211 3.91679 6.91611C4.14719 6.81211 4.41599 6.76011 4.72319 6.76011C5.43999 6.76011 6.02879 6.99411 6.48959 7.46211C6.95039 7.93011 7.18079 8.52811 7.18079 9.25611ZM14.2464 9.25611C14.2464 10.0101 14.0032 10.6211 13.5168 11.0891C13.0304 11.5311 12.416 11.7521 11.6736 11.7521C10.7776 11.7521 10.0352 11.4531 9.44639 10.8551C8.88319 10.2571 8.60159 9.39911 8.60159 8.28111C8.60159 7.08511 8.93439 5.91511 9.59999 4.77111C10.2912 3.60111 11.2512 2.67811 12.48 2.00211L13.3632 3.36711C12.6976 3.83511 12.16 4.35511 11.7504 4.92711C11.3664 5.49911 11.1104 6.16211 10.9824 6.91611C11.2128 6.81211 11.4816 6.76011 11.7888 6.76011C12.5056 6.76011 13.0944 6.99411 13.5552 7.46211C14.016 7.93011 14.2464 8.52811 14.2464 9.25611Z"
              fill="currentColor"
            />
          </svg>
          <span className="relative z-10 italic text-gray-800 dark:text-gray-200">
          "Using your influencer marketing service helped me reach a whole new audience and grow my sales by 20% in just three months. The influencers you matched me with were perfect for my brand, and the content they created was high-quality and engaging." -
          </span>
        </p>
      </div>
      <footer className="mt-6">
        
        
      </footer>
    </blockquote>
    {/* End Blockquote */}
  </div>
  {/* End Testimonials */}
</>

{/*Fifth Section*/}

<>
  {/* ========== FOOTER ========== */}
  <footer className="relative overflow-hidden bg-neutral-900">
    <svg
      className="absolute -bottom-20 start-1/2 w-[1900px] transform -translate-x-1/2"
      width={2745}
      height={488}
      viewBox="0 0 2745 488"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 330.864C232.505 403.801 853.749 527.683 1482.69 439.719C2111.63 351.756 2585.54 434.588 2743.87 487"
        className="stroke-neutral-700/50"
        stroke="currentColor"
      />
      <path
        d="M0.5 308.873C232.505 381.81 853.749 505.692 1482.69 417.728C2111.63 329.765 2585.54 412.597 2743.87 465.009"
        className="stroke-neutral-700/50"
        stroke="currentColor"
      />
      <path
        d="M0.5 286.882C232.505 359.819 853.749 483.701 1482.69 395.738C2111.63 307.774 2585.54 390.606 2743.87 443.018"
        className="stroke-neutral-700/50"
        stroke="currentColor"
      />
      <path
        d="M0.5 264.891C232.505 337.828 853.749 461.71 1482.69 373.747C2111.63 285.783 2585.54 368.615 2743.87 421.027"
        className="stroke-neutral-700/50"
        stroke="currentColor"
      />
      <path
        d="M0.5 242.9C232.505 315.837 853.749 439.719 1482.69 351.756C2111.63 263.792 2585.54 346.624 2743.87 399.036"
        className="stroke-neutral-700/50"
        stroke="currentColor"
      />
      <path
        d="M0.5 220.909C232.505 293.846 853.749 417.728 1482.69 329.765C2111.63 241.801 2585.54 324.633 2743.87 377.045"
        className="stroke-neutral-700/50"
        stroke="currentColor"
      />
      <path
        d="M0.5 198.918C232.505 271.855 853.749 395.737 1482.69 307.774C2111.63 219.81 2585.54 302.642 2743.87 355.054"
        className="stroke-neutral-700/50"
        stroke="currentColor"
      />
      <path
        d="M0.5 176.927C232.505 249.864 853.749 373.746 1482.69 285.783C2111.63 197.819 2585.54 280.651 2743.87 333.063"
        className="stroke-neutral-700/50"
        stroke="currentColor"
      />
      <path
        d="M0.5 154.937C232.505 227.873 853.749 351.756 1482.69 263.792C2111.63 175.828 2585.54 258.661 2743.87 311.072"
        className="stroke-neutral-700/50"
        stroke="currentColor"
      />
      <path
        d="M0.5 132.946C232.505 205.882 853.749 329.765 1482.69 241.801C2111.63 153.837 2585.54 236.67 2743.87 289.082"
        className="stroke-neutral-700/50"
        stroke="currentColor"
      />
      <path
        d="M0.5 110.955C232.505 183.891 853.749 307.774 1482.69 219.81C2111.63 131.846 2585.54 214.679 2743.87 267.091"
        className="stroke-neutral-700/50"
        stroke="currentColor"
      />
      <path
        d="M0.5 88.9639C232.505 161.901 853.749 285.783 1482.69 197.819C2111.63 109.855 2585.54 192.688 2743.87 245.1"
        className="stroke-neutral-700/50"
        stroke="currentColor"
      />
      <path
        d="M0.5 66.9729C232.505 139.91 853.749 263.792 1482.69 175.828C2111.63 87.8643 2585.54 170.697 2743.87 223.109"
        className="stroke-neutral-700/50"
        stroke="currentColor"
      />
      <path
        d="M0.5 44.9819C232.505 117.919 853.749 241.801 1482.69 153.837C2111.63 65.8733 2585.54 148.706 2743.87 201.118"
        className="stroke-neutral-700/50"
        stroke="currentColor"
      />
      <path
        d="M0.5 22.991C232.505 95.9276 853.749 219.81 1482.69 131.846C2111.63 43.8824 2585.54 126.715 2743.87 179.127"
        className="stroke-neutral-700/50"
        stroke="currentColor"
      />
      <path
        d="M0.5 1C232.505 73.9367 853.749 197.819 1482.69 109.855C2111.63 21.8914 2585.54 104.724 2743.87 157.136"
        className="stroke-neutral-700/50"
        stroke="currentColor"
      />
    </svg>
    <div className="relative z-10">
      <div className="w-full max-w-5xl px-4 xl:px-0 py-10 lg:pt-16 mx-auto">
        <div className="inline-flex items-center">
          {/* Logo */}
          <svg
            className="w-24 h-auto"
            width={116}
            height={32}
            viewBox="0 0 116 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.5696 30.8182V11.3182H37.4474V13.7003H37.6229C37.7952 13.3187 38.0445 12.9309 38.3707 12.5369C38.7031 12.1368 39.134 11.8045 39.6634 11.5398C40.1989 11.2689 40.8636 11.1335 41.6577 11.1335C42.6918 11.1335 43.6458 11.4044 44.5199 11.946C45.3939 12.4815 46.0926 13.291 46.6158 14.3743C47.139 15.4515 47.4006 16.8026 47.4006 18.4276C47.4006 20.0095 47.1451 21.3452 46.6342 22.4347C46.1295 23.518 45.4401 24.3397 44.5661 24.8999C43.6982 25.4538 42.7256 25.7308 41.6484 25.7308C40.8852 25.7308 40.2358 25.6046 39.7003 25.3523C39.1709 25.0999 38.737 24.7829 38.3984 24.4013C38.0599 24.0135 37.8014 23.6226 37.6229 23.2287H37.5028V30.8182H33.5696ZM37.4197 18.4091C37.4197 19.2524 37.5367 19.9879 37.7706 20.6158C38.0045 21.2436 38.343 21.733 38.7862 22.0838C39.2294 22.4285 39.768 22.6009 40.402 22.6009C41.0421 22.6009 41.5838 22.4254 42.027 22.0746C42.4702 21.7176 42.8056 21.2251 43.0334 20.5973C43.2673 19.9633 43.3842 19.2339 43.3842 18.4091C43.3842 17.5904 43.2704 16.8703 43.0426 16.2486C42.8149 15.6269 42.4794 15.1406 42.0362 14.7898C41.593 14.4389 41.0483 14.2635 40.402 14.2635C39.7618 14.2635 39.2202 14.4328 38.777 14.7713C38.34 15.1098 38.0045 15.59 37.7706 16.2116C37.5367 16.8333 37.4197 17.5658 37.4197 18.4091ZM49.2427 25.5V11.3182H53.0559V13.7926H53.2037C53.4622 12.9124 53.8961 12.2476 54.5055 11.7983C55.1149 11.3428 55.8166 11.1151 56.6106 11.1151C56.8076 11.1151 57.02 11.1274 57.2477 11.152C57.4754 11.1766 57.6755 11.2105 57.8478 11.2536V14.7436C57.6632 14.6882 57.4077 14.639 57.0815 14.5959C56.7553 14.5528 56.4567 14.5312 56.1859 14.5312C55.6073 14.5312 55.0903 14.6574 54.6348 14.9098C54.1854 15.156 53.8284 15.5007 53.5638 15.9439C53.3052 16.3871 53.176 16.898 53.176 17.4766V25.5H49.2427ZM64.9043 25.777C63.4455 25.777 62.1898 25.4815 61.1373 24.8906C60.0909 24.2936 59.2845 23.4503 58.7182 22.3608C58.1519 21.2652 57.8688 19.9695 57.8688 18.4737C57.8688 17.0149 58.1519 15.7346 58.7182 14.6328C59.2845 13.531 60.0816 12.6723 61.1096 12.0568C62.1437 11.4413 63.3563 11.1335 64.7474 11.1335C65.683 11.1335 66.5539 11.2843 67.3603 11.5859C68.1728 11.8814 68.8806 12.3277 69.4839 12.9247C70.0932 13.5218 70.5672 14.2727 70.9057 15.1776C71.2443 16.0762 71.4135 17.1288 71.4135 18.3352V19.4155H59.4384V16.978H67.7111C67.7111 16.4117 67.588 15.91 67.3418 15.473C67.0956 15.036 66.754 14.6944 66.317 14.4482C65.8861 14.1958 65.3844 14.0696 64.812 14.0696C64.2149 14.0696 63.6856 14.2081 63.2239 14.4851C62.7684 14.7559 62.4114 15.1222 62.1529 15.5838C61.8944 16.0393 61.762 16.5471 61.7559 17.1072V19.4247C61.7559 20.1264 61.8851 20.7327 62.1437 21.2436C62.4083 21.7545 62.7807 22.1484 63.2608 22.4254C63.741 22.7024 64.3103 22.8409 64.9689 22.8409C65.406 22.8409 65.8061 22.7794 66.1692 22.6562C66.5324 22.5331 66.8432 22.3485 67.1018 22.1023C67.3603 21.8561 67.5572 21.5545 67.6927 21.1974L71.3304 21.4375C71.1458 22.3116 70.7672 23.0748 70.1948 23.7273C69.6285 24.3736 68.896 24.8783 67.9974 25.2415C67.1048 25.5985 66.0738 25.777 64.9043 25.777ZM77.1335 6.59091V25.5H73.2003V6.59091H77.1335ZM79.5043 25.5V11.3182H83.4375V25.5H79.5043ZM81.4801 9.49006C80.8954 9.49006 80.3937 9.29616 79.9752 8.90838C79.5628 8.51444 79.3566 8.04356 79.3566 7.49574C79.3566 6.95407 79.5628 6.48935 79.9752 6.10156C80.3937 5.70762 80.8954 5.51065 81.4801 5.51065C82.0649 5.51065 82.5635 5.70762 82.9759 6.10156C83.3944 6.48935 83.6037 6.95407 83.6037 7.49574C83.6037 8.04356 83.3944 8.51444 82.9759 8.90838C82.5635 9.29616 82.0649 9.49006 81.4801 9.49006ZM89.7415 17.3011V25.5H85.8083V11.3182H89.5569V13.8203H89.723C90.037 12.9955 90.5632 12.343 91.3019 11.8629C92.0405 11.3767 92.9361 11.1335 93.9887 11.1335C94.9735 11.1335 95.8322 11.349 96.5647 11.7798C97.2971 12.2107 97.8665 12.8262 98.2728 13.6264C98.679 14.4205 98.8821 15.3684 98.8821 16.4702V25.5H94.9489V17.1719C94.9551 16.304 94.7335 15.6269 94.2841 15.1406C93.8348 14.6482 93.2162 14.402 92.4283 14.402C91.8989 14.402 91.4311 14.5159 91.0249 14.7436C90.6248 14.9714 90.3109 15.3037 90.0831 15.7408C89.8615 16.1716 89.7477 16.6918 89.7415 17.3011ZM107.665 25.777C106.206 25.777 104.951 25.4815 103.898 24.8906C102.852 24.2936 102.045 23.4503 101.479 22.3608C100.913 21.2652 100.63 19.9695 100.63 18.4737C100.63 17.0149 100.913 15.7346 101.479 14.6328C102.045 13.531 102.842 12.6723 103.87 12.0568C104.905 11.4413 106.117 11.1335 107.508 11.1335C108.444 11.1335 109.315 11.2843 110.121 11.5859C110.934 11.8814 111.641 12.3277 112.245 12.9247C112.854 13.5218 113.328 14.2727 113.667 15.1776C114.005 16.0762 114.174 17.1288 114.174 18.3352V19.4155H102.199V16.978H110.472C110.472 16.4117 110.349 15.91 110.103 15.473C109.856 15.036 109.515 14.6944 109.078 14.4482C108.647 14.1958 108.145 14.0696 107.573 14.0696C106.976 14.0696 106.446 14.2081 105.985 14.4851C105.529 14.7559 105.172 15.1222 104.914 15.5838C104.655 16.0393 104.523 16.5471 104.517 17.1072V19.4247C104.517 20.1264 104.646 20.7327 104.905 21.2436C105.169 21.7545 105.542 22.1484 106.022 22.4254C106.502 22.7024 107.071 22.8409 107.73 22.8409C108.167 22.8409 108.567 22.7794 108.93 22.6562C109.293 22.5331 109.604 22.3485 109.863 22.1023C110.121 21.8561 110.318 21.5545 110.454 21.1974L114.091 21.4375C113.907 22.3116 113.528 23.0748 112.956 23.7273C112.389 24.3736 111.657 24.8783 110.758 25.2415C109.866 25.5985 108.835 25.777 107.665 25.777Z"
              className="fill-white"
              fill="currentColor"
            />
            <path
              d="M1 29.5V16.5C1 9.87258 6.37258 4.5 13 4.5C19.6274 4.5 25 9.87258 25 16.5C25 23.1274 19.6274 28.5 13 28.5H12"
              className="stroke-white"
              stroke="currentColor"
              strokeWidth={2}
            />
            <path
              d="M5 29.5V16.66C5 12.1534 8.58172 8.5 13 8.5C17.4183 8.5 21 12.1534 21 16.66C21 21.1666 17.4183 24.82 13 24.82H12"
              className="stroke-white"
              stroke="currentColor"
              strokeWidth={2}
            />
            <circle
              cx={13}
              cy="16.5214"
              r={5}
              className="fill-white"
              fill="currentColor"
            />
          </svg>
          {/* End Logo */}
          <div className="border-s border-neutral-700 ps-5 ms-5">
            <p className="text-sm text-neutral-400">2024 Preline Co.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* ========== END FOOTER ========== */}
</>

 
    </>

</>

  )
}

export default Home;