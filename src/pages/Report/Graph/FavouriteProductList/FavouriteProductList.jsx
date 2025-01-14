import React from 'react'
import { Tag } from '@/components'

function FavouriteProductList() {
    return (
        <div className='flex flex-row gap-x-lg border-b py-md'>
            <img src="/img/croissant.png" alt="" className='h-14 w-14 p-sm bg-background-secondary rounded full' />
            <div className='flex flex-1 flex-col items-start justify-start'>
                <span className='text-sm font-medium'>Buttermelt Croissant</span>
                <Tag category='Pastry' />
            </div>
            <div className='flex flex-row items-center gap-x-md'>
                <span className='text-sm font-medium'>183</span>
                <span className='text-sm text-text-caption'>Times</span>
            </div>
        </div>
    )
}

export default FavouriteProductList
