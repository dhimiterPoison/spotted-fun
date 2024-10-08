import '~/styles/globals.css'

import { GeistSans } from 'geist/font/sans'
import { type Metadata } from 'next'

import { TRPCReactProvider } from '~/trpc/react'
import Header from './_components/header'

export const metadata: Metadata = {
    title: 'Spotted',
    description: 'Spotted',
    icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${GeistSans.variable}`}>
            <body>
                <TRPCReactProvider>
                    <div className="flex flex-col w-full min-h-screen">
                        <Header />
                        <div className="navpage flex w-full grow"> {children}</div>
                    </div>
                </TRPCReactProvider>
            </body>
        </html>
    )
}
