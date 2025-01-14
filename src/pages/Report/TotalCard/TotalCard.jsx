import React from 'react'

import Card from './Card';


function TotalCard() {
    return (
        <div className='grid grid-cols-4 gap-lg w-full'>
            <Card title="Total Sales Amount" amount='12,650.00' amountName="RM" />
            <Card title="Total Product Sales" amount='1,250' amountName="Items" />
            <Card title="Total Customers" amount='400' amountName="Persons" />
            <Card title="Net Profit" amount='12,650.00' amountName="RM" />
        </div>
    )
}

export default TotalCard
