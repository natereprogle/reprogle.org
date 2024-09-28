'use client'
import Header from '@/components/header/header'
import styles from '@/app/keys/page.module.css'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import Footer from '@/components/footer/footer'

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

    return (
        <>
            <div className={'h-screen flex flex-col justify-between'}>
                <Header
                    props={{
                        title: '',
                        subtitle: 'SSH & PGP Keys',
                        imageUrl: '/Keys.jpg',
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

            <div className="dark:text-white lg:mx-auto lg:flex lg:justify-evenly lg:space-x-8 px-4 md:px-8">
                <div className="space-y-4 pb-10" id="pgp-key">
                    <h3 className="text-xl md:text-2xl">PGP Key</h3>
                    <p className="max-w-xl">
                        Below is my PGP key I used to use for code signing on
                        GitHub. Nowadays it&apos;s never used, but it&apos;s
                        here for historical purposes and to verify that I was
                        the one who signed those commits.
                    </p>
                    <div className="w-full break-words rounded-[0.25rem] dark:bg-slate-800 bg-floralwhite-300 py-2 px-4 md:w-fit">
                        <code>
                            -----BEGIN PGP PUBLIC KEY BLOCK-----
                            <br className="hidden md:block" />
                            mDMEYugSJRYJKwYBBAHaRw8BAQdAKcublhX5k/SKdVEK7D7UQenuyFxdFOcNlDTT
                            <br className="hidden md:block" />
                            FYOqRu+0OU5hdGUgUmVwcm9nbGUgKFl1YmlLZXkgR1BHIEtleSkgPG5hdGUucmVw
                            <br className="hidden md:block" />
                            cm9nbGVAZ21haWwuY29tPoiTBBMWCgA7FiEEMaXPkdww2zH5XKH1BvXgR5QOnRIF
                            <br className="hidden md:block" />
                            AmLoEiUCGwMFCwkIBwICIgIGFQoJCAsCBBYCAwECHgcCF4AACgkQBvXgR5QOnRIX
                            <br className="hidden md:block" />
                            cQD+JfjCXbHiow+OG+b93FE1PkdPnoNiaPxu7RqKB4kbZr4BAMqdv+NaKr6VZxoe
                            <br className="hidden md:block" />
                            /QdzkwevUYf50+PjcQqOAt2sz8IIuDgEYugSJRIKKwYBBAGXVQEFAQEHQPnsyKC6
                            <br className="hidden md:block" />
                            ri7QCkwiHpA/sBpyO6Xv6ysWL+J5wUaG/GwAAwEIB4h4BBgWCgAgFiEEMaXPkdww
                            <br className="hidden md:block" />
                            2zH5XKH1BvXgR5QOnRIFAmLoEiUCGwwACgkQBvXgR5QOnRK+rwEAzKcbv4GBrP9C
                            <br className="hidden md:block" />
                            iS0zAwt8VrcYXRKpniNk/o8Wl5ac4b4A/1iZfIuzelWbO2W1ehd0vqMQ1fmdGlq7
                            <br className="hidden md:block" />
                            8fW3L6xyXysA =Daxa
                            <br />
                            -----END PGP PUBLIC KEY BLOCK-----
                        </code>
                    </div>
                    <p>
                        As a{' '}
                        <a
                            href="https://reprogle.org/natereprogle_pgp.gpg"
                            className="underline">
                            raw file
                        </a>{' '}
                        :
                    </p>
                    <div className="w-fit break-all rounded-[0.25rem] dark:bg-slate-800 bg-floralwhite-300 py-2 px-4">
                        <code>
                            {' '}
                            curl https://reprogle.org/natereprogle_pgp.gpg | gpg
                            --import{' '}
                        </code>
                    </div>
                </div>
                <div className="space-y-4 pb-8" id="ssh-ed25519-key">
                    <h3 className="text-xl md:text-2xl">SSH Key</h3>
                    <p>
                        Below is my SSH key. I use this almost exclusively for
                        GitHub commit signing.
                    </p>
                    <div className="w-full break-all rounded-[0.25rem] dark:bg-slate-800 bg-floralwhite-300 py-2 px-4 md:w-fit">
                        <code>
                            ssh-ed25519 <br className="block md:hidden" />
                            AAAAC3NzaC1lZDI1NTE5AAAAIHXj4naNfNjrKvj1Gm0WBAICOrmh3YEQe1h5KHmkFMMf
                        </code>
                    </div>
                    <p>
                        It has a fingerprint of{' '}
                        <code className="break-all rounded-sm dark:bg-slate-800 bg-floralwhite-300 p-[2px]">
                            SHA256:+Anww30dTyHENrG1+bkuJcZlhvIGGl+7j1x2VmUfdsg
                        </code>
                        .
                    </p>
                    <div className="flex flex-col space-y-4 pb-8">
                        <p>
                            As a{' '}
                            <a
                                href="https://reprogle.org/natereprogle_ssh.pub"
                                className="underline">
                                raw file
                            </a>{' '}
                            :
                        </p>
                        <code className="w-full break-all rounded-[0.25rem] dark:bg-slate-800 bg-floralwhite-300 py-2 px-4 md:w-fit">
                            curl https://reprogle.org/natereprogle_ssh.pub
                            &gt;&gt; ~/.ssh/authorized_keys
                        </code>
                    </div>
                </div>
            </div>

            <hr className={'text-raisinblack-400 bg-raisinblack-400 h-[2px]'} />
            <Footer />
        </>
    )
}
