import React from 'react'

function DashboardLayout({ children }) {
    return (
        <div className='flex flex-col w-full bg-background-secondary h-screen p-lg gap-y-lg'>{children}</div>
    )
}

export default DashboardLayout
