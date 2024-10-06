import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// This would allow you to wrap the generated client from src/xata.ts with your own credentials
// import { XataClient } from '../xata'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// export const xata = new XataClient({ apiKey: process.env.DB_API_KEY })
