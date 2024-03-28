'use client'
import Header from '@/components/header/header'
import styles from '@/app/keys/page.module.css'
import {
    motion,
    useInView,
    useMotionValueEvent,
    useScroll,
} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Footer from '@/components/footer.tsx/footer'
import { Noto_Serif_Display } from 'next/font/google'

const notoSerifDisplay = Noto_Serif_Display({
    subsets: ['latin'],
    weight: 'variable',
})

export default function Keys() {
    const [isVisible, setIsVisible] = useState(true)

    // Framer motion to get rid of useEffect and instead just use their scroll hook
    const { scrollY } = useScroll()
    useMotionValueEvent(scrollY, 'change', () => {
        listenToScroll(0, setIsVisible)
    })

    const listenToScroll = (
        height: number,
        callback: React.Dispatch<React.SetStateAction<boolean>>,
    ) => {
        let heightToHideFrom = height
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop

        if (winScroll > heightToHideFrom) {
            callback(false)
        } else {
            callback(true)
        }
    }

    const h1Ref = useRef(null)
    const blueHighlight = useRef<HTMLSpanElement>(null)
    const orangeHighlight = useRef<HTMLSpanElement>(null)
    const isInView = useInView(h1Ref, {
        margin: '-400px 0px 0px 0px',
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
    }, [isInView])

    return (
        <>
            <div className={'h-screen flex flex-col justify-between'}>
                <Header
                    props={{
                        title: '',
                        subtitle: 'Contact Me',
                        imageUrl: '/Contact.jpg',
                    }}
                />
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-10 h-10 md:w-14 md:h-14 ${styles['bounce']} mx-auto`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    transition={{
                        duration: 0.8,
                        delay: isVisible ? 1.5 : 0.2,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
                    />
                </motion.svg>
            </div>

            <div className={'space-y-14 mt-8 mx-7 lg:mx-20'}>
                <h1
                    className={`justify-between items-center header-text ${notoSerifDisplay.className}`}
                    ref={h1Ref}>
                    The contact form has been{' '}
                    <span ref={blueHighlight}>temporarily removed</span> due to
                    the website redesign! If you need to contact me, please
                    reach out through one of the many{' '}
                    <span ref={orangeHighlight}>social media channels</span>{' '}
                    listed in the footer.
                </h1>
                <hr
                    className={
                        'text-raisinblack-400 bg-raisinblack-400 h-[2px]'
                    }
                />
            </div>

            <Footer />
        </>
    )
}
