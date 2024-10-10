import { ChevronRight, NotepadText } from 'lucide-react'
import React from 'react'
import { DaysRecord, SpotsRecord } from '~/xata'
import { Button } from '../_components/ui/button'
import Link from 'next/link'
import { formatDateShort } from '~/lib/utils'

const DayCard = ({ day, dayData }: { day: Date; dayData: DaysRecord }) => {
    let notesCount = dayData?.notesCount ?? 0
    let ctaText = notesCount == 0 ? 'Add new' : 'View'

    return (
        <div className="w-full p-2 rounded-lg hover:bg-slate-200 min-h-20 flex gap-2">
            <div className="image h-full w-20 bg-slate-400 rounded-md"></div>
            <div className="content flex w-full justify-between">
                <div className="flex flex-col items-start justify-center">
                    <span className="font-semibold">
                        {formatDateShort(day)}
                    </span>
					<span>
						{dayData?.summary}
					</span>
                </div>
                <div className="flex flex-col items-end">
                    <span className="flex gap-2 items-center">
                        <NotepadText className="w-4 h-4" /> {notesCount}
                    </span>

                    <Link href={`/journal/${dayData?.id}`}>
                        <Button
                            size="sm"
                            type="button"
                            variant={notesCount === 0 ? 'secondary' : 'outline'}
                            className="rounded-full py-1"
                        >
                            {ctaText} <ChevronRight className="w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DayCard
