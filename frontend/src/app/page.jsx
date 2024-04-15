import React from 'react'
import Navbar from './(main)/navbar'

const Home = () => {
  return (
    <>
    <Navbar />
      {/* Hero */}
      <div className="bg-slate-900">
        <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
            {/* Announcement Banner */}
            <div className="flex justify-center">
              <a
                className="group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 ps-4 rounded-full shadow-md"
                href="../signup"
              >
                <p className="me-2 inline-block text-white text-sm">
                  Welcome To Influencer's World
                </p>
                <span className="group-hover:bg-white/[.1] py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm">
                  <svg
                    className="flex-shrink-0 size-4"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
            {/* End Announcement Banner */}
            {/* Title */}
            <div className="max-w-3xl text-center mx-auto">
              <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Now it's easier than ever to build products
              </h1>
            </div>
            {/* End Title */}
            <div className="max-w-3xl text-center mx-auto">
              <p className="text-lg text-gray-400">
                Preline is a large open-source project, crafted with Tailwind CSS
                framework by Hmlstream.
              </p>
            </div>
            {/* Buttons */}
            <div className="text-center">
              <a
                className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
                href="/signup"
              >
                Get started
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
            </div>
            {/* End Buttons */}
          </div>

          { /*second section*/}
          <>
            {/* Icon Blocks */}
            <div className="max-w-[85rem] px-4 bg-gray-500 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
              {/* Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Icon Block */}
                <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700">
                  {/* Icon */}
                  <div className="flex justify-center items-center size-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg mx-auto">
                    <svg
                      className="flex-shrink-0 size-7 text-white"
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
                  </div>
                  {/* End Icon */}
                  <div className="mt-3">
                    <h3 className="text-sm sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Creative minds
                    </h3>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700">
                  {/* Icon */}
                  <div className="flex justify-center items-center size-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg mx-auto">
                    <svg
                      className="flex-shrink-0 size-7 text-white"
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
                      <path d="m7.5 4.27 9 5.15" />
                      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                      <path d="m3.3 7 8.7 5 8.7-5" />
                      <path d="M12 22V12" />
                    </svg>
                  </div>
                  {/* End Icon */}
                  <div className="mt-3">
                    <h3 className="text-sm sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Effortless updates
                    </h3>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700">
                  {/* Icon */}
                  <div className="flex justify-center items-center size-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg mx-auto">
                    <svg
                      className="flex-shrink-0 size-7 text-white"
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
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  </div>
                  {/* End Icon */}
                  <div className="mt-3">
                    <h3 className="text-sm sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Strong empathy
                    </h3>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700">
                  {/* Icon */}
                  <div className="flex justify-center items-center size-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg mx-auto">
                    <svg
                      className="flex-shrink-0 size-7 text-white"
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
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                      <path d="M4 22h16" />
                      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                    </svg>
                  </div>
                  {/* End Icon */}
                  <div className="mt-3">
                    <h3 className="text-sm sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Conquer the best
                    </h3>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700">
                  {/* Icon */}
                  <div className="flex justify-center items-center size-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg mx-auto">
                    <svg
                      className="flex-shrink-0 size-7 text-white"
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
                  </div>
                  {/* End Icon */}
                  <div className="mt-3">
                    <h3 className="text-sm sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Designing for people
                    </h3>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700">
                  {/* Icon */}
                  <div className="flex justify-center items-center size-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg mx-auto">
                    <svg
                      className="flex-shrink-0 size-7 text-white"
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
                  </div>
                  {/* End Icon */}
                  <div className="mt-3">
                    <h3 className="text-sm sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Simple and affordable
                    </h3>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700">
                  {/* Icon */}
                  <div className="flex justify-center items-center size-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg mx-auto">
                    <svg
                      className="flex-shrink-0 size-7 text-white"
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
                      <path d="M2 3h20" />
                      <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
                      <path d="m7 21 5-5 5 5" />
                    </svg>
                  </div>
                  {/* End Icon */}
                  <div className="mt-3">
                    <h3 className="text-sm sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Get freelance work
                    </h3>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div className="h-36 hover:bg-pink-400 hover:shadow-xl sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700">
                  {/* Icon */}
                  <div className="flex justify-center items-center size-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg mx-auto">
                    <svg
                      className="flex-shrink-0 size-7 text-white"
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
                      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
                      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
                      <path d="M2 7h20" />
                      <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
                    </svg>
                  </div>
                  {/* End Icon */}
                  <div className="mt-3">
                    <h3 className="text-sm sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Sell your goods
                    </h3>
                  </div>
                </div>
                {/* End Icon Block */}
              </div>
              {/* End Grid */}
            </div>
            {/* End Icon Blocks */}
          </>

          <>
  {/* Features */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    {/* Grid */}
    <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
      <div className="lg:col-span-7">
        {/* Grid */}
        <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
          <div className="col-span-4">
            <img
              className="rounded-xl hover:scale-105"
              src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80"
              alt="Image Description"
            />
          </div>
          {/* End Col */}
          <div className="col-span-3">
            <img
              className="rounded-xl"
              src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt="Image Description"
            />
          </div>
          {/* End Col */}
          <div className="col-span-5">
            <img
              className="rounded-xl"
              src="https://images.unsplash.com/photo-1600194992440-50b26e0a0309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt="Image Description"
            />
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Col */}
      <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
        <div className="space-y-6 sm:space-y-8">
          {/* Title */}
          <div className="space-y-2 md:space-y-4">
            <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
              Collaborative tools to design user experience
            </h2>
            <p className="text-gray-500">
              Use our tools to explore your ideas and make your vision come
              true. Then share your work easily.
            </p>
          </div>
          {/* End Title */}
          {/* List */}
          <ul role="list" className="space-y-2 sm:space-y-4">
            <li className="flex space-x-3">
              {/* Solid Check */}
              <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                <svg
                  className="flex-shrink-0 size-3.5"
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              {/* End Solid Check */}
              <span className="text-sm sm:text-base text-gray-500">
                <span className="font-bold">Less routine</span> – more
                creativity
              </span>
            </li>
            <li className="flex space-x-3">
              {/* Solid Check */}
              <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                <svg
                  className="flex-shrink-0 size-3.5"
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              {/* End Solid Check */}
              <span className="text-sm sm:text-base text-gray-500">
                Hundreds of thousands saved
              </span>
            </li>
            <li className="flex space-x-3">
              {/* Solid Check */}
              <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                <svg
                  className="flex-shrink-0 size-3.5"
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              {/* End Solid Check */}
              <span className="text-sm sm:text-base text-gray-500">
                Scale budgets <span className="font-bold">efficiently</span>
              </span>
            </li>
          </ul>
          {/* End List */}
        </div>
      </div>
      {/* End Col */}
    </div>
    {/* End Grid */}
  </div>
  {/* End Features */}
</>



        </div>
      </div>
      {/* End Hero */}
    </>



  )
}

export default Home