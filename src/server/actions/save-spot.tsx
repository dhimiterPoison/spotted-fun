"use server"

import { revalidatePath } from "next/cache";
import { getXataClient } from "~/xata";

export default async function saveSpot(formData: FormData) {
  const xata = getXataClient();

  const content = formData.get("content");
  const location = formData.get("location");

  console.log("SAVING SPOT",content, location);

  const spot = await xata.db.spots.create({ content: content as string, location: location as string });
  revalidatePath("/");
  console.log("SPOT", spot);
//   return { s};
}