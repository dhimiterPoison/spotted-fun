import React from 'react'
import { incomesources } from '../page'

const IncomeSourceDetailPage = ({ params }: { params: { incomeId: string } }) => {
    const incomeSourceData = incomesources.find(el => el.id === params.incomeId);

    if(!incomeSourceData){
        return <div>data Not found</div>
    }

    return <div>{incomeSourceData?.hourlyRate}</div>
}

export default IncomeSourceDetailPage
