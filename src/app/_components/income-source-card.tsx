import Link from 'next/link'
import React from 'react'

interface IncomeSourceProps {
    id: string
    name: string
    type: string
    hourlyRate: number
    totalMonth: number
}

const IncomeSourceCard = ({
    id,
    name,
    type,
    hourlyRate,
    totalMonth,
}: IncomeSourceProps) => {
    return (
        <Link href={`finances/${id}`} className="w-full flex justify-between rounded-sm bg-slate-200">
            <div className="left flex flex-col p-2">
                <h4 className="font-semibold text-lg">{name}</h4>
                <span className="font-normal text-base">{type}</span>
            </div>
            <div className="right flex gap-2 py-2">
                <div className="info-slot flex flex-col items-center justify-center p-2 border-l-slate-400 border">
                    <span>€ / hour</span>
                    <span className=' font-semibold'>€ {hourlyRate}</span>
                </div>
                <div className="info-slot flex flex-col items-center justify-center p-2 border-l-slate-400 border">
                    <span>total month</span>
                    <span className=' font-semibold'>€ {totalMonth}</span>
                </div>
            </div>
        </Link>
    )
}

export default IncomeSourceCard
