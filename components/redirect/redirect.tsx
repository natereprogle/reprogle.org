'use client'

import { Noto_Serif_Display } from 'next/font/google'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const notoSerifDisplay = Noto_Serif_Display({
    subsets: ['latin'],
    weight: 'variable',
})

export default function RedirectComponent() {
    const searchParams = useSearchParams()
    const router = useRouter()

    const [secondsRemaining, setSecondsRemaining] = useState(7)

    useEffect(() => {
        if (secondsRemaining == 0) {
            router.push(`${searchParams.get('url')}`)
        }

        const interval = setTimeout(() => {
            setSecondsRemaining(prevSeconds =>
                prevSeconds == 0 ? 0 : prevSeconds - 1,
            )
        }, 1000)
        return () => clearInterval(interval)
    }, [router, searchParams, secondsRemaining])

    return (
        <div className="h-screen mt-0 mx-7 lg:mx-20 space-x-4 sm:space-x-0 space-y-10 sm:space-y-0 justify-center flex">
            <div className="flex flex-col justify-center text-center items-center">
                <h1
                    className={`${notoSerifDisplay.className} header-text flex items-center space-x-2 sm:space-x-4`}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-[1.5rem] w-[1.5rem] sm:h-[2.5rem] sm:w-[2.5rem] md:h-[3rem] md:w-[3rem]">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
                        />
                    </svg>
                    <span>Hold the phone!</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl xl:text-3xl">
                    You&apos;re being redirected away from reprogle.org to{' '}
                    <span className="highlight-orange">
                        {searchParams.get('site')}
                    </span>
                    . <br />
                    <br /> Please note that personal social media sites reflect
                    my own opinions or beliefs, and do not necessarily reflect
                    the beliefs of my current or previous employers. Social
                    media profiles will always adhere to my employers&apos; Code
                    of Ethical and Professional Standards, Non-Discrimination
                    Policy, and Employee Confidentiality Agreement.
                    <br />
                    <br />
                    You will be redirected in {secondsRemaining}{' '}
                    {`${secondsRemaining === 1 ? 'second' : 'seconds'}`}. If you
                    are not redirected,{' '}
                    <Link
                        href={`${searchParams.get('url')}`}
                        className="underline">
                        click here
                    </Link>
                    .
                </p>
            </div>
        </div>
    )
}
