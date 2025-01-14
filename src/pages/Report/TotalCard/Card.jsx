import React from 'react'
import { SlGraph } from "react-icons/sl";

function Card({ amount, amountName, title }) {
    return (
        <div className='flex flex-col p-lg gap-y-xl bg-background-primary rounded-md'>
            <div className='flex flex-row items-center gap-x-md  text-sm font-semibold'>
                <SlGraph className='h-8 w-8 rounded-full bg-background-secondary p-sm' />
                {title}
            </div>

            <div className='flex flex-row justify-between items-end'>
                <span className='text-3xl font-semibold'>{amount}</span>
                <span className='text-text-caption text-sm font-semibold'>{amountName}</span>
            </div>

            <div className='flex flex-row justify-between items-center pt-md shadow-top-md'>
                <span className='text-xs font-semibold text-text-success bg-background-success px-lg py-xs rounded-full'>+ RM 1,543.30</span>
                <span className='text-xs font-semibold text-text-success bg-background-success px-lg py-xs rounded-full'>12.2%</span>
            </div>
        </div>
    )
}

export default Card
