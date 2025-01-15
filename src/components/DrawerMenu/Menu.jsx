import React from 'react'
import { menuList } from './config/menuList'
import { NavLink } from 'react-router-dom';


function Menu() {
    return (
        <div className='flex flex-col justify-center h-full '>
            {menuList.map((menu, index) => (
                <NavLink to={menu.link} key={index} className={({ isActive }) => `w-full flex flex-row gap-x-md items-center py-md px-sm rounded-md hover:bg-background-blue hover:text-text-blue ${isActive && "bg-text-blue text-white"}`}>
                    {/* <PiCashRegister className='w-10 h-10 p-sm rounded-full bg-background-secondary text-blue-500' /> */}
                    {menu.icon('w-10 h-10 p-sm rounded-full bg-background-secondary text-blue-500')}
                    <span className='font-medium'>{menu.name}</span>
                </NavLink>
            ))}
        </div>
    )
}

export default Menu
