import { Noto_Serif_Display } from 'next/font/google'
import Link from 'next/link'

const notoSerifDisplay = Noto_Serif_Display({
    subsets: ['latin'],
    weight: 'variable',
})

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <div className="space-y-14 my-8 mx-7 lg:mx-20">
            <div className="mb-8 md:flex">
                <div className="mb-5 md:w-2/3">
                    <h3 className="font-heading text-xl">
                        Living in Arkansas, reaching the world
                    </h3>
                    <a
                        href="/contact"
                        className="font-heading text-3xl font-bold underline md:text-4xl xl:text-5xl">
                        {' '}
                        Get in touch{' '}
                    </a>
                </div>
                <div className="md:w-1/3">
                    <h3 className="mb-3 font-heading text-xl md:mb-6">
                        Socials
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link
                                href={{
                                    pathname: '/redirect',
                                    query: {
                                        site: 'X (Formerly known as Twitter)',
                                        url: 'https://www.twitter.com/natereprogle',
                                    },
                                }}>
                                X (Formerly known as Twitter)
                            </Link>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/natereprogle/">
                                {' '}
                                LinkedIn{' '}
                            </a>
                        </li>
                        <li>
                            <Link
                                href={{
                                    pathname: '/redirect',
                                    query: {
                                        site: 'Instagram',
                                        url: 'https://www.instagram.com/natereprogle',
                                    },
                                }}>
                                Instagram
                            </Link>
                        </li>
                        <li>
                            <a href="https://www.github.com/natereprogle">
                                GitHub
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center text-xs">
                <h2>Copyright © 2022-{year} | Nate Reprogle</h2>
                <p>
                    Site source:{' '}
                    <a
                        href="https://www.github.com/natereprogle/reprogle.org"
                        className="hover:underline">
                        click here{' '}
                    </a>
                </p>
            </div>
        </div>
    )
}
