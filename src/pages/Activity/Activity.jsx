import { DashboardLayout } from '@/layouts'
import React from 'react'
import { DashboardHeader } from '@/components'

function Activity({ children }) {
    return (
        <DashboardLayout>
            <DashboardHeader />
            <div className='grid grid-cols-[300px,_1fr] gap-x-lg'>
                {children}
            </div>
        </DashboardLayout>
    )
}

export default Activity
