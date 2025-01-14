import React from 'react'
import FavouriteProductList from './FavouriteProductList/FavouriteProductList'

function FavouriteProduct() {
    return (
        <div className='flex flex-col gap-y-md rounded-sm bg-background-primary p-lg'>
            <h1 className='text-lg font-medium'>Favourite Product</h1>

            <div className='flex flex-row w-full gap-x-md'>
                <span className='text-sm font-medium border rounded-full px-lg py-xs'>Img</span>
                <span className='flex flex-1 items-center justify-center text-sm font-medium border rounded-full px-lg py-xs'>Product Name</span>
                <span className='text-sm font-medium border rounded-full px-lg py-xs'>Total Orders</span>
            </div>

            <div className='flex flex-col h-[calc(500px-100px)] overflow-y-scroll'>
                {/* i want in this section to be scroll */}
                <FavouriteProductList />
                <FavouriteProductList />
            </div>
        </div>
    )
}

export default FavouriteProduct
