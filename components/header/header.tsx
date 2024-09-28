import { Noto_Serif_Display } from 'next/font/google'
import { motion } from 'framer-motion'

const notoSerifDisplay = Noto_Serif_Display({
    subsets: ['latin'],
    weight: 'variable',
})

export default function Header({ props }: { props: any }) {
    return (
        <header
            className={
                'h-screen mt-24 sm:mt-0 items-center mx-7 lg:mx-20 space-x-4 sm:space-x-0 space-y-10 sm:space-y-0 justify-around sm:[justify-content:normal] sm:grid sm:grid-cols-sm-header md:grid-cols-md-header lg:grid-cols-lg-header xl:grid-cols-xl-header'
            }>
            <div className={'flex flex-col'}>
                <h3 className={`header-text ${notoSerifDisplay.className}`}>
                    {props.title}
                </h3>
                <h3
                    className={`text-[3rem] -mt-5 -mb-4 sm:-mt-10 sm:-mb-4 md:-my-12 sm:text-[5rem] md:text-[7rem] xl:text-[10rem] font-bold ${notoSerifDisplay.className}`}>
                    {props.subtitle}
                </h3>
            </div>
            <motion.div
                className={'flex justify-center'}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0, 0.71, 0.2, 1.01],
                }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={props.imageUrl}
                    alt={'A picture of Nate'}
                    className={'xl:h-[65%] xl:w-[65%] rounded-full'}></img>
            </motion.div>
        </header>
    )
}
