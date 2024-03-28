'use client'

import RedirectComponent from '@/components/redirect/redirect'
import { Suspense } from 'react'

export default function Redirect() {
    return (
        <Suspense>
            <RedirectComponent />
        </Suspense>
    )
}
