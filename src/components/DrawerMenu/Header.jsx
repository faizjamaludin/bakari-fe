import React from 'react'
import { Button } from '../ui/button'
import { IoMdClose } from "react-icons/io";
import {
    DrawerClose,

} from "@/components/ui/drawer"



function Header() {
    return (
        <div className='flex flex-row gap-x-lg'>
            <div className='flex flex-1 items-center bg-background-secondary rounded-full p-sm flex-row gap-x-md'>
                <img src="/img/avatar.jpg" alt="" className='w-9 h-9 rounded-full object-fit' />
                <div className='flex flex-col'>
                    <span className='text-md font-semibold'>Ahmad Faiz</span>
                    <span className='text-text-caption text-sm font-medium'>Cashier</span>
                </div>
            </div>
            <DrawerClose>
                <Button variant="icon" size="icon" asChild><IoMdClose className='w-12 h-12 bg-background-red text-text-red hover:bg-text-red hover:text-background-red ease-in-out duration-200' /></Button>
            </DrawerClose>
        </div>
    )
}

export default Header
