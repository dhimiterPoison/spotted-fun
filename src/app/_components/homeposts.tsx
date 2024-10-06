"use client";

import { useState } from "react";

import { api } from "~/trpc/react";
import { Card, CardHeader, CardTitle } from "./ui/card";


export function LatestPosts() {
  const [latestPosts] = api.post.getPosts.useSuspenseQuery();

 

  return (
    <div className="grid grid-cols-3 gap-4">
                {latestPosts.map((post, index) => (
                  <Card key={post.id} className="h-full">
                    <CardHeader>
                      <CardTitle className="text-sm truncate">{post.name}</CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
  );
}
