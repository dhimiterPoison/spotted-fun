import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./_components/ui/card";
import { Button } from "./_components/ui/button";
import { LatestPosts } from "./_components/homeposts";
import { getXataClient } from "~/xata";
import { pgTable, text } from "drizzle-orm/pg-core";


const xata = getXataClient();
const spots = pgTable('spots', {
  id: text('id').primaryKey(),
  name: text('content'),
  city: text('location')
});

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  // const session = await getServerAuthSession();

  // void api.post.getLatest.prefetch();


  const spotsList = await xata.db.spots.getAll();


  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#e8d7ff] to-[#15162c] text-white">
          <div className="container grid grid-cols-3 grid-rows-5 gap-4 w-full h-full">
            <div className="col-span-2  text-black p-6">
              <h1 className="text-4xl font-bold mb-4">Welcome to Spotted</h1>
              <p className="text-lg">Connect with people you've seen around campus. Make new friends and expand your network!</p>
            </div>
            <div className="col-span-1">

            {spotsList.map((spot, index) => (
                <Card key={spot.id} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-sm truncate">{spot.content}</CardTitle>
                  </CardHeader>
                  <CardContent
                    className="text-sm truncate">{spot.location}
                </CardContent>
                </Card>
              ))}
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
            </div>
          </div>
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
  );
}
