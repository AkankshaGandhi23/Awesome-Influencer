'use client';
import { AppProvider } from '@/context/AppContext';
import { BrandProvider } from '@/context/BrandContext';
import React from 'react'

const Template = ({ children }) => {
    return (
        <AppProvider>
            <BrandProvider>
                {children}
            </BrandProvider>
        </AppProvider>
    )
}

export default Template;