import React from 'react'
import AdminNavbar from './navbar'
import Sidebar from './sidebar'
import './brand.css';
import Navbar from './navbar';

const Layout = ({ children }) => {
    return (
        <div className='bg-gray-100 font-family-karla flex'>
            {/* <Navbar/> */}
            <Sidebar />
            {children}
        </div>
    )
}

export default Layout