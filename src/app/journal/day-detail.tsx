import { ChevronRight } from 'lucide-react'
import React from 'react'
import { formatDateLong } from '~/lib/utils'
import { getXataClient, NotesRecord } from '~/xata'

const xata = getXataClient()

const DayDetail = async ({dayId}: {dayId?: string}) => {

    if (!dayId) {
        return (
            <div className="flex flex-col w-full md:w-2/3 bg-slate-50 rounded-lg p-4">
                <h1 className="text-2xl font-bold">Day detail</h1>
                <p>No day selected</p>
            </div>
        )
    }

    const notes = await xata.db.notes
        .filter({
            dayId: dayId,
        })
        .getAll()

	const day = await xata.db.days.filter({
		id: dayId,
	}).getFirst()

    return (
        <div className="flex flex-col w-full  bg-slate-50 rounded-lg p-4">
            <h1 className="text-2xl font-bold flex gap-2 items-center">Journal <ChevronRight /></h1><span className='font-semibold'>{formatDateLong(day?.day)}</span>
            <div className="notes flex flex-col gap-4 ">
			{notes.map(note => (
                <div key={note.id} className='flex flex-col gap-2 p-2 bg-slate-100 rounded-lg'>
                    <h2 className='text-lg font-semibold'>{note.title}</h2>
                    <p>{note.content}</p>
                </div>
            ))}
			</div>
        </div>
    )
}

export default DayDetail
