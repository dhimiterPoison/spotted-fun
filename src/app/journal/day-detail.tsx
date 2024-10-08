import React from 'react'
import { getXataClient, NotesRecord } from '~/xata'

const xata = getXataClient()

const DayDetail = async ({ params }: { params: { dayId: string } }) => {
    const dayId = params.dayId

    if (!dayId) {
        return (
            <div className="flex flex-col w-full bg-slate-50 rounded-lg p-4">
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

    return (
        <div className="flex flex-col w-full bg-slate-50 rounded-lg p-4">
            <h1 className="text-2xl font-bold">Day detail</h1>
            {notes.map(note => (
                <div key={note.id}>
                    <h2>{note.title}</h2>
                    <p>{note.content}</p>
                </div>
            ))}
        </div>
    )
}

export default DayDetail
