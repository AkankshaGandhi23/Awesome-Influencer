'use client';
import useBrandContext from '@/context/BrandContext';
import { IconLogout } from '@tabler/icons-react';
import Link from 'next/link';
import React, { useState } from 'react'

const Sidebar = () => {

  const { currentBrand, brandLogout } = useBrandContext();

  return (
    <aside className="relative bg-sidebar h-screen w-80 hidden sm:block shadow-xl">
      <div className="p-6">
        <a
          href="index.html"
          className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
        >
          {currentBrand.name}
        </a>
        <Link href='/brand/new-campaign' className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
          <i className="fas fa-plus mr-3" /> New Campaign
        </Link>
      </div>
      <nav className="text-white text-base font-semibold pt-3">
        <a
          href="index.html"
          className="flex items-center active-nav-link text-white py-4 pl-6 nav-item"
        >
          <i className="fas fa-tachometer-alt mr-3" />
          Dashboard
        </a>
        <a
          href="blank.html"
          className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
        >
          <i className="fas fa-sticky-note mr-3" />
          Blank Page
        </a>
        <a
          href="tables.html"
          className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
        >
          <i className="fas fa-table mr-3" />
          Tables
        </a>
        <a
          href="forms.html"
          className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
        >
          <i className="fas fa-align-left mr-3" />
          Forms
        </a>
        <a
          href="tabs.html"
          className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
        >
          <i className="fas fa-tablet-alt mr-3" />
          Tabbed Content
        </a>
        <a
          href="calendar.html"
          className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
        >
          <i className="fas fa-calendar mr-3" />
          Calendar
        </a>
      </nav>
      <button
        onClick={brandLogout}
        className="absolute w-full upgrade-btn bottom-0 text-white flex items-center justify-center py-4"
      >
        <IconLogout size={20} />
        Logout
      </button>
    </aside>

  )
}

export default Sidebar;