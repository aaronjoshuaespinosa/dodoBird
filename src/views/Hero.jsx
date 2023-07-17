import React from 'react'
import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'

const Hero = () => {
    return (
        <>
            <div className="bg-lblu min-h-screen w-full flex items-center justify-center relative" id='hero'>
                <Parallax translateY={[40, -70]} className="max-w-screen-xl h-full p-8 pt-32 md:pt-8 mx-auto flex flex-col items-center justify-center gap-y-8 z-40">
                    <p className="font-caprasimo text-yllw text-8xl lg:text-9xl text-center hero-stroke">DODO</p>
                    <p className="text-drkblu text-xl md:text-2xl text-center max-w-lg">When you're so friendly that you become extinct... Dodos, the original social butterflies!</p>
                    <div className="flex gap-x-4">
                        <button className="px-8 py-4 bg-white border-solid border-2 border-drkblu rounded-full font-bold text-lg hover:-translate-y-1 hover:drop-shadow-[0px_5px_0px_rgba(0,0,0,0.25)] transition-all ease-in-out duration-200">BUTTON</button>
                        <button className="px-8 py-4 bg-lblu border-solid border-2 border-drkblu rounded-full font-bold text-lg hover:-translate-y-1 hover:drop-shadow-[0px_5px_0px_rgba(0,0,0,0.25)] transition-all ease-in-out duration-200">BUTTON</button>
                    </div>
                </Parallax>
                <Parallax translateY={[20, -30]} className='w-full h-auto absolute bottom-0 lg:-bottom-[30%] left-0 right-0 z-30'>
                    <motion.img
                        initial={{ y: 0 }} animate={{ y: [1, 15, 1] }} transition={{ duration: 3, repeat: Infinity }}
                        src="/trees.svg" alt="trees-svg" className="w-full" />
                </Parallax>

                <Parallax translateX={[70, -70]} scale={[2, 1]} className="w-[100%] lg:w-auto absolute left-64 top-4">
                    <motion.img
                        initial={{ scale: 1 }} animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity }}
                        src="/sun.svg" alt="sun-svg" className='w-auto' />
                </Parallax>

                <Parallax translateY={[10, -10]} className="w-[150%] lg:w-full absolute z-0 top-8">
                    <motion.img
                        initial={{ y: 0 }} animate={{ y: [1, 1, 10, 1] }} transition={{ duration: 5, repeat: Infinity }}
                        src="/clouds.svg" alt="clouds-svg" className='w-full' />
                </Parallax>
            </div>
        </>
    )
}

export default Hero