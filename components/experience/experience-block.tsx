import { useInView } from 'framer-motion'
import { Noto_Serif_Display } from 'next/font/google'
import { useEffect, useRef } from 'react'

const notoSerifDisplay = Noto_Serif_Display({
    subsets: ['latin'],
    weight: 'variable',
})

export default function ExperienceBlock({ props }: { props: any }) {
    const divRef = useRef(null)
    const highlight = useRef<HTMLHeadingElement>(null)
    const isInView = useInView(divRef, {
        margin: '-600px 0px 0px 0px',
        once: true,
    })

    useEffect(() => {
        if (!isInView) return

        // Personally I think this is quite ugly but it works
        setTimeout(() => {
            highlight.current?.classList.add(`highlight-${props.color}`)
        }, 0.2 * 1000)
    }, [isInView, props.color])

    return (
        <div
            className="mb-7 block lg:flex lg:justify-between lg:space-x-5"
            ref={divRef}>
            <div className="flex flex-col lg:w-1/3 lg:space-y-2">
                <h1 className="font-bold">{props.timeRange}</h1>
                <h2>{props.company}</h2>
            </div>
            <div className="flex flex-col lg:w-3/4 lg:space-y-2">
                <h1
                    className={`text-2xl font-extrabold ${notoSerifDisplay.className}`}>
                    <span ref={highlight}>{props.title}</span>
                </h1>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
