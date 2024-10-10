import React from 'react'

export default function JournalLayout({
    children,
    detail,
}: {
    children: React.ReactNode
    detail: React.ReactNode
}) {
    return (
        <main className="flex w-full bg-slate-300 p-2 gap-2">
            <div className="flex flex-col w-full md:w-1/3 bg-slate-50 rounded-lg p-4 gap-2 shrink-0">
                <h2 className="text-2xl font-bold">Journal</h2>
                {children}
            </div>
            <div className="hidden md:block">
                {detail}
            </div>
        </main>
    )
}
