import React from 'react'
import { menuList } from './config/menuList'
import { PiCashRegister } from "react-icons/pi";
import { Link } from 'react-router-dom';


function Menu() {
    return (
        <div className='flex flex-col justify-center h-full p-lg'>
            {menuList.map((menu, index) => (
                <Link to={menu.link} key={index} className='w-full flex flex-row gap-x-md items-center py-md px-sm hover:bg-background-blue hover:text-text-blue '>
                    <PiCashRegister className='w-10 h-10 p-sm rounded-full bg-background-secondary text-blue-500' />
                    <span className='font-medium'>{menu.name}</span>
                </Link>
            ))}
        </div>
    )
}

export default Menu
