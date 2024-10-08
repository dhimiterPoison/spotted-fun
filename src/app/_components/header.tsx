import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { UserSearch } from 'lucide-react'
import SpotModal from './spotModal'

const Header = () => {
  return (
	<div className=' w-full flex items-center h-20 px-12 justify-between sticky top-0 bg-white z-10'>
		<Link href='/' className='font-bold text-3xl'>Spotted</Link>
		<div className='flex gap-4'>
                {/* {session && <span>Logged in as {session.user?.name}</span>} */}
			<SpotModal />
		</div>
	</div>
  )
}

export default Header