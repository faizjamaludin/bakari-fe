import React from 'react'
import { activityMenuList } from './config/activityMenuList'
import { NavLink } from 'react-router-dom'

function SidebarMenu({ menuList }) {
    return (
        <div className='flex flex-col w-full gap-y-md'>
            <input type="text" placeholder='Search...' className='text-sm p-lg rounded-lg' />
            {menuList.map((menu, index) => (
                <NavLink key={index} to={menu.link} className={({ isActive }) => `flex flex-row items-center gap-x-lg bg-background-primary rounded-lg p-lg text-sm font-medium hover:bg-background-blue hover:text-text-blue ${isActive && "bg-text-blue text-white"}`}>{menu.title}</NavLink>
            ))}
        </div>
    )
}

export default SidebarMenu
