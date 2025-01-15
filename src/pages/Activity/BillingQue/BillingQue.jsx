import React from 'react'
import Activity from '../Activity'
import { SidebarMenu } from '@/components'
import Order from './Order'
import { activityMenuList } from '@/components/SidebarMenu/config/activityMenuList'

function BillingQue() {
    return (
        <Activity>
            <SidebarMenu menuList={activityMenuList} />
            <Order />
        </Activity>
    )
}

export default BillingQue
