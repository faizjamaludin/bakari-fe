import React from 'react'
import { Switch } from "@/components/ui/switch"

function Option() {
    return (
        <div className='h-12 w-full bg-background-primary rounded-sm flex flex-row justify-between items-center px-4'>
            <div className='flex flex-row items-center gap-x-sm'>
                <span className='text-text-caption text-sm font-medium'>Date Period</span>
                <input type="date" className='text-sm border outline-0 p-sm rounded-full' />
            </div>
            <div>
                <div className='flex flex-row items-center gap-x-md border p-md rounded-full'>
                    <span className='text-sm font-medium'>Show Graph</span>
                    <Switch />
                </div>
            </div>
        </div>
    )
}

export default Option
