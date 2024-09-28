import Nav from '@/components/nav/nav'
import './globals.css'
import React from 'react'

export const metadata = {
    title: 'Nate Reprogle',
    description: 'Meet Nate Reprogle, Software Engineer',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={'staticNoise'}>
                <Nav />
                {children}
            </body>
        </html>
    )
}
