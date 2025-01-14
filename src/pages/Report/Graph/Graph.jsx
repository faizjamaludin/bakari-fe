import React from 'react'
import FavouriteProduct from './FavouriteProduct'

function Graph() {
    return (
        <div className='grid grid-cols-[1fr,_500px] gap-lg h-[500px]'>
            {/* do the graph here */}
            <div className='bg-background-primary rounded-sm'></div>

            {/* favourite product here */}
            <FavouriteProduct />
        </div>
    )
}

export default Graph
