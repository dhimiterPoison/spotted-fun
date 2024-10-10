import { ChevronRight } from 'lucide-react'
import React from 'react'
import { formatDateLong } from '~/lib/utils'
import { getXataClient } from '~/xata'
import DayDetail from '../../day-detail'

const xata = getXataClient()

const DayDetailPage = async ({ params }: { params: { dayId: string } }) => {
    const dayId = params.dayId

    return (
        <DayDetail dayId={dayId} />
    )
}

export default DayDetailPage