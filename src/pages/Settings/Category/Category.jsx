
import React from 'react'

import Settings from '../Settings'
import AddCategory from './AddCategory'



function Category() {
    return (
        <Settings>
            <div className='flex flex-col'>
                <AddCategory />
            </div>
        </Settings>
    )
}

export default Category
