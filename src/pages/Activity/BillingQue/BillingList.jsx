import React from 'react'
import { orderQueList } from './config/orderQueList'

function BillingList() {
    return (
        <div className='flex flex-col h-[500px] bg-background-primary p-md overflow-y-scroll rounded-b-md'>
            {orderQueList.map((order, index) => (
                <div key={index} className='flex flex-row justify-between items-center border-b py-sm' >
                    <div className='flex flex-col'>
                        <p className='text-md font-medium'>{order.waiter}</p>
                        <p className='text-sm font-medium'><span className='text-text-caption'>Order Number :</span> #{order.orderNumber}</p>
                        <p className='text-sm font-medium'><span className='text-text-caption'>Table :</span> {order.table}</p>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-xl font-medium'>RM {order.amount}</span>
                        <span className='bg-background-blue text-text-blue text-center text-sm font-medium p-sm rounded-full'>{order.status}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BillingList
