import { pgTable, text } from 'drizzle-orm/pg-core'
import { api, HydrateClient } from '~/trpc/server'
import { getXataClient } from '~/xata'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../_components/ui/card'
import NewSpotCard from '../_components/newSpotCard'

const xata = getXataClient()
const spots = pgTable('spots', {
    id: text('id').primaryKey(),
    name: text('content'),
    city: text('location'),
})

export default async function Home() {
    const hello = await api.post.hello({ text: 'from tRPC' })
    // const session = await getServerAuthSession();

    const spotsList = await xata.db.spots
        .select(['xata.createdAt', 'content', 'location'])
        .getPaginated({
            pagination: {
                size: 16,
            },
            sort: {
                column: 'xata.createdAt',
                direction: 'desc',
            },
        })

    return (
        <HydrateClient>
            <main className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-[#e8d7ff] to-[#15162c] text-white">
                <div className="container grid grid-cols-2 md:grid-cols-3  gap-4 p-4 w-full h-full">
                    <div className="col-span-2  text-black p-6">
                        <h1 className="text-4xl font-bold mb-4">
                            Welcome to Spotted
                        </h1>
                        <p className="text-lg">
                            Send a smile to someone! Did you appreciate
                            someone's style? Did you see someone doing something
                            cool? Tell them!
                        </p>
                    </div>
                    <div  className="col-span-1 row-span-1">
                        <NewSpotCard />    
                    </div>
                            

                    {spotsList.records.map(spot => (
                        <div key={spot.id} className="col-span-1 row-span-1">
                            <Card className="h-full">
                                <CardHeader>
                                    <CardDescription>
                                        {spot.location}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <CardTitle>{spot.content}</CardTitle>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
                {/* <Card className="h-full">
                <CardHeader>
                  <CardTitle>Get Started</CardTitle>
                  <CardDescription>Create your profile or search for others</CardDescription>
                </CardHeader>
                <div className="p-6">
                  <Button className="w-full mb-2">Create Profile</Button>
                  <Button variant="outline" className="w-full">Search Users</Button>
                </div>
              </Card> */}
                <div></div>
                {/* <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
              {hello ? hello.greeting : "Loading tRPC query..."}
            </p>

            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-center text-2xl text-white">
              </p>
              
            </div>
          </div> */}

                {/* {session?.user && <LatestPost />} */}
            </main>
        </HydrateClient>
    )
}
