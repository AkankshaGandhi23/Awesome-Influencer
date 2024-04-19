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
              <div classNam='lg-flex'>
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

              <div>
                <p className='font-extrabold text-green-300 py-5 text-lg'>Are you a brand</p>
                </div>

              <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                <a
                  className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  href="/brand-signup"
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
                  href="brand-login"
                >
                  Login
                </a>
              </div>
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
          {/* End Logo */}
          <div className="border-s border-neutral-700 ps-5 ms-5">
            <p className="text-sm text-neutral-400">2024 Awesome Influencers</p>
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