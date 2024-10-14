import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// This would allow you to wrap the generated client from src/xata.ts with your own credentials
// import { XataClient } from '../xata'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// export const xata = new XataClient({ apiKey: process.env.DB_API_KEY })

export const generateLastSevenDays = () => {
    const days = []
    for (let i = 0; i <= 6; i++) {
        const date = new Date()
        date.setDate(date.getDate() - i)
        days.push(date)
    }
    return days
}

export const formatDateShort = (date: Date) => {
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'short',
    })
}

export const formatDateLong = (date?: Date | null) => {
    if (!date) return ''
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })
}

