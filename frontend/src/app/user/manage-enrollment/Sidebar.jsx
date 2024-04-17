'use client';
import useAppContext from '@/context/AppContext';
import useBrandContext from '@/context/BrandContext';
import { IconLogout } from '@tabler/icons-react';
import Link from 'next/link';
import React, { useState } from 'react';
import './sidebar.css';

const Sidebar = ({ items, setSelEnrollment, selEnrollment }) => {

  const { currentUser, logout } = useAppContext();

  return (
    <aside className="relative bg-sidebar h-screen w-80 hidden sm:block shadow-xl">
      <div className="p-6">
        <a
          href="index.html"
          className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
        >
          {currentUser.name}
        </a>
        <Link href='/brand/new-campaign' className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
          <i className="fas fa-plus mr-3" /> New Campaign
        </Link>
      </div>
      <nav className="text-white text-base font-semibold pt-3">
        {
          items.map(item => (
            <a
              onClick={e => {
                e.preventDefault();
                setSelEnrollment(item)
              }}
              href='#'
              className={`flex items-center text-white py-4 pl-6 nav-item ${selEnrollment !== null && (item._id === selEnrollment._id ? 'active-nav-link' : '')}`}
            >
              <i className="fas fa-tachometer-alt mr-3" />
              {item.campaign.title}
            </a>
          ))
        }
      </nav>
      <button
        onClick={logout}
        className="absolute w-full upgrade-btn bottom-0 text-white flex items-center justify-center py-4"
      >
        <IconLogout size={20} />
        Logout
      </button>
    </aside>

  )
}

export default Sidebar;