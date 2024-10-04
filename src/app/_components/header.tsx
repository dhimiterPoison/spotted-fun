import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { UserSearch } from 'lucide-react'

const Header = () => {
  return (
	<div className='flex items-center h-20 justify-around'>
		<span className='font-bold text-3xl'>Spotted</span>
		<div className='flex gap-4'>
                {/* {session && <span>Logged in as {session.user?.name}</span>} */}

			<Button className='flex gap-2'><UserSearch strokeWidth={1.5}/> Spot someone!</Button>
		</div>
	</div>
  )
}

export default Header