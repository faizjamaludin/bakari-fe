import { Button } from '@/components/ui/button'
import React from 'react'
import BillingList from './BillingList'

function Que() {
    return (
        <div className='flex flex-col'>
            {/* action bar */}
            <div className='flex flex-row justify-between bg-background-primary p-md shadow-md z-10 rounded-t-md'>
                <div className='flex flex-row items-center gap-x-md'>
                    <Button variant="action">All</Button>
                    <Button variant="action">Active</Button>
                    <Button variant="action">Active</Button>
                </div>
                <div className='flex flex-row'>
                    <span className='bg-background-blue text-text-blue flex items-center h-9 px-4 py-2 text-sm font-medium rounded-full'>4 Active Queue</span>
                </div>
            </div>

            <BillingList />
        </div>
    )
}

export default Que
