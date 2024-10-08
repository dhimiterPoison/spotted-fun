import React from 'react'
import DayCard from './day-card';
import { generateLastSevenDays } from '~/lib/utils';
import { getXataClient } from '~/xata';
import DayDetail from './day-detail';

const xata = getXataClient();
const JournalPage = async () => {

  const lastSevenDays = generateLastSevenDays();


  const notesForLastSevenDays = await Promise.all(
    lastSevenDays.map(async (day) => ({
      day,
      daydata: await fetchNotesForDay(day)
    }))
  );

  return (
	<main className='flex w-full bg-slate-300 p-2 gap-2'>
		<div className='flex flex-col w-full bg-slate-50 rounded-lg p-4 gap-2 '>
			<h2 className='text-2xl font-bold'>Journal</h2>
			{notesForLastSevenDays.map((day) => (
				<DayCard key={day?.day.toISOString()} day={day?.day} dayData={day?.daydata}/>
			))}
		</div>
		{/* <DayDetail /> */}
	</main>
  )
}

export default JournalPage;


const fetchNotesForDay = async (day: Date) => {
    const startOfDay = new Date(day);
    startOfDay.setHours(0, 0, 0, 0);	
    const endOfDay = new Date(day);
    endOfDay.setHours(23, 59, 59, 999);

    const dbday = await xata.db.days
      .filter({
        "userId": "clz534554000000000000000000",
		"day": {
			"$gt": startOfDay,
			"$lt": endOfDay
		}
      })
      .getFirst();

    return dbday;
  };


