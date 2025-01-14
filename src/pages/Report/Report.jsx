import React from 'react'
import Header from './Header/Header'
import Option from './Option/Option'
import { DashboardLayout } from '@/layouts'
import TotalCard from './TotalCard/TotalCard'
import Graph from './Graph/Graph'

function Report() {
    return (
        <DashboardLayout>
            <Header />
            <Option />
            <TotalCard />
            <Graph />
        </DashboardLayout>
    )
}

export default Report
