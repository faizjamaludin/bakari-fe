import { Button } from '@/components/ui/button'
import React from 'react'

function AddCategory() {
    return (
        <div className='flex flex-row items-center gap-x-lg'>
            <input type="text" placeholder='Create new category...' className='flex flex-1 h-10 rounded-full p-lg outline-0' />
            <Button variant="action">Add Category</Button>
        </div>
    )
}

export default AddCategory
