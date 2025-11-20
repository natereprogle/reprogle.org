import React, { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import { Noto_Serif_Display } from 'next/font/google'
import Experience from '../experience/experience'
import Skills from '../skills/skills'

const notoSerifDisplay = Noto_Serif_Display({
    subsets: ['latin'],
    weight: 'variable',
})

export default function Body() {
    const h1Ref = useRef(null)
    const blueHighlight = useRef<HTMLSpanElement>(null)
    const greenHighlight = useRef<HTMLSpanElement>(null)
    const orangeHighlight = useRef<HTMLSpanElement>(null)
    const isInView = useInView(h1Ref, {
        margin: '-600px 0px 0px 0px',
        once: true,
    })

    useEffect(() => {
        if (!isInView) return

        // Personally I think this is quite ugly but it works
        setTimeout(() => {
            blueHighlight.current?.classList.add('highlight-blue')
        }, 0.2 * 1000)

        setTimeout(() => {
            orangeHighlight.current?.classList.add('highlight-orange')
        }, 0.4 * 1000)

        setTimeout(() => {
            greenHighlight.current?.classList.add('highlight-green')
        }, 0.6 * 1000)
    }, [isInView])

    return (
        <div className={'space-y-14 mt-8 mx-7 lg:mx-20'}>
            <h1
                className={`justify-between items-center header-text ${notoSerifDisplay.className}`}
                ref={h1Ref}>
                I am a <span ref={blueHighlight}>Software Engineer</span>{' '}
                based in{' '}
                <span ref={orangeHighlight}>Arkansas</span>. I&apos;ve carried
                many titles over my career, with{' '}
                <span ref={greenHighlight}>skills including</span> management,
                logistics, & excellent customer service
            </h1>
            <hr className={'text-raisinblack-400 bg-raisinblack-400 h-[2px]'} />
            <div className={'block pb-10 lg:flex lg:justify-between'}>
                <h2 className={`subheader-text ${notoSerifDisplay.className}`}>
                    About me
                </h2>
                <p className={'leading-7 lg:w-1/2'}>
                    I excel in fast-paced customer focused environments where
                    service is the main goal. While many say they&apos;re good
                    at multitasking, I pride myself in being able to handle
                    multiple tasks efficiently <em>and</em> accurately. I&apos;m
                    also very passionate about driving positive change in the
                    workforce as well as the world we live in. <br />
                    <br />I started working in the food industry while going to
                    college full time. After 3 years, I moved full-time to
                    transportation and logistics while continuing my studies.
                    Within 6 months, and not much experience to my name, I moved
                    into a management position where I exceeded even my own
                    expectations. After graduating, I moved into IT on J.B. Hunt's
                    Unified Communications Engineering team.<br />
                    <br />
                    In November 2025, I felt called to step into the nonprofit sector
                    and joined Restore Hope, Inc, a 501(c)(3). Working in this field
                    has been incredibly rewarding, giving me the opportunity to build
                    meaningful solutions that directly support people, families, and
                    communities in need.
                </p>
            </div>
            <div>
                <div className="block lg:flex lg:justify-between">
                    <Skills></Skills>
                    <Experience></Experience>
                </div>
            </div>
        </div>
    )
}
