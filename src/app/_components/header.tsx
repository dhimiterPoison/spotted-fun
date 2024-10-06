import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { UserSearch } from 'lucide-react'
import SpotModal from './spotModal'

const Header = () => {
  return (
	<div className='flex items-center h-20 justify-around'>
		<span className='font-bold text-3xl'>Spotted</span>
		<div className='flex gap-4'>
                {/* {session && <span>Logged in as {session.user?.name}</span>} */}
			<SpotModal />
		</div>
	</div>
  )
}

export default Header