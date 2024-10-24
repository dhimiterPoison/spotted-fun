import React from 'react'
import IncomeSourceCard from '../_components/income-source-card'
import { ChevronDown } from 'lucide-react'

export const incomesources = [
    {
        id: '1',
        name: 'Flink',
        type: 'Employee',
        hourlyRate: 13.68,
        totalMonth: 0,
    },
    {
        id: '2',
        name: 'Software dev',
        type: 'Freelance',
        hourlyRate: 25,
        totalMonth: 0,
    },
]

const FinancesPage = () => {
    return (
        <main className="flex w-full flex-col min-h-full  p-4">
            <div className="w-full h-full rounded-md bg-slate-100 px-4 py-2">
                <h2 className="font-semibold text-xl">Finances</h2>
                <div className="incomesource flex flex-col gap-2 pt-6">
                    <div className="income-sources-header flex justify-between">
                        <h3 className="font-normal text-base">
                            Income sources
                        </h3>
                        <ChevronDown></ChevronDown>
                    </div>
                    {incomesources.map(el => {
                        return (
                            <IncomeSourceCard
                                key={el.id}
                                {...el}
                            ></IncomeSourceCard>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}

export default FinancesPage
