import React from 'react'
import { Button } from '../ui/button'
import { IoMdClose } from "react-icons/io";
import {
    DrawerClose,

} from "@/components/ui/drawer"



function Header() {
    return (
        <div className='flex flex-row gap-x-lg'>
            <div className='flex flex-1 bg-background-secondary rounded-full p-sm flex-row gap-x-md'>
                <img src="/img/avatar.jpg" alt="" className='w-10 h-10 rounded-full object-fit' />
                <div className='flex flex-col'>
                    <span className='text-sm font-semibold'>Ahmad Faiz</span>
                    <span className='text-text-caption text-xs font-medium'>Cashier</span>
                </div>
            </div>
            <DrawerClose>
                <Button variant="icon" size="icon" asChild><IoMdClose className='w-10 h-10 bg-background-red text-text-red' /></Button>
            </DrawerClose>
        </div>
    )
}

export default Header
