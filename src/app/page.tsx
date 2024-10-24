import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from './_components/ui/card'
import { cn } from '~/lib/utils'
import { Button } from './_components/ui/button'
import Link from 'next/link'

const routes = [
    {
        id: 1,
        title: 'Spotted',
        description:
            "Send a smile to someone! Did you appreciate someone's style? Did you see someone doing something cool? Tell them!",
        customClass:
            'text-white bg-gradient-to-b from-[#15162c] to-[#e8d7ff] text-white',
        path: 'spotted'
    },
    {
        id: 2,
        title: 'Analog adventures',
        description:
            'Magic captured into film rolls. Memories assume phisical shape.',
        customClass:
            'text-white bg-gradient-to-b from-[#15162c] to-[#1c4c2c] text-white',
            path: 'analog-adventures'
        },
    {
        id: 3,
        title: 'Finances',
        description:
            'Manage your finances in the most effective way for your needs',
        customClass:
            'text-white bg-gradient-to-b from-[#15162c] to-[#0000aa] text-white',
            path: 'finances'
        },
]

const HomePage = () => {
    return (
        <main className="flex  gap-8 w-full min-h-full justify-center p-8">
            {routes.map(route => {
                return (
                    <Card
                        className={cn(
                            'border-none relative h-72 w-96 shadow-sm',
                            route.customClass
                        )}
                    >
                        <CardHeader>
                            <CardTitle>{route.title}</CardTitle>
                            <CardDescription className={cn('text-white')}>
                                {route.description}
                            </CardDescription>
                        </CardHeader>
                        {/* <CardContent>
                            <p>Card Content</p>
                        </CardContent> */}
                        <CardFooter className="flex justify-end  absolute left-0 w-full bottom-0">
                            <Link href={route.path}><Button className="border border-white">
                                Jump in! 
                            </Button></Link>
                        </CardFooter>
                    </Card>
                )
            })}
        </main>
    )
}

export default HomePage
