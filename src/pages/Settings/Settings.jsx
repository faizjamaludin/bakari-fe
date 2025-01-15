import { DashboardHeader } from '@/components'
import { DashboardLayout } from '@/layouts'
import { SidebarMenu } from '@/components'
import { settingMenuList } from '@/components/SidebarMenu/config/settingMenuList'
import React from 'react'

function Settings({ children }) {
    return (
        <DashboardLayout>
            <DashboardHeader />
            <div className='grid grid-cols-[300px,_1fr] gap-x-lg'>
                <SidebarMenu menuList={settingMenuList} />
                {children}
            </div>
        </DashboardLayout>
    )
}

export default Settings
