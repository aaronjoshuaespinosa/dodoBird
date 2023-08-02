import React from 'react'
import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'

const History = () => {
    return (
        <>
            <div className="bg-lblu w-full flex flex-col items-center justify-center relative" id='history'>
                {/* <Parallax translateX={[15, 0]} className="absolute bottom-0 lg:-bottom-4 right-0 z-30">
                    <motion.img
                        initial={{ scale: 1, rotateX: 0 }} animate={{ scale: [1, 1.04, 1], rotateX: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity }}
                        src="/hunter.svg" alt="" className='h-96 lg:h-auto' />
                </Parallax> */}

                <Parallax translateX={[-15, 0]} className="absolute -bottom-4 left-0 z-30">
                    <motion.img
                        initial={{ scale: 1, rotateX: 0 }} animate={{ scale: [1, 1.04, 1], rotateX: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity }}
                        src="/dodo.svg" alt="" className='h-64 lg:h-auto' />
                </Parallax>

                <motion.img
                    initial={{ y: 0 }} animate={{ y: [1, 1, 10, 1] }} transition={{ duration: 5, repeat: Infinity }}
                    src="/clouds.svg" alt="clouds-svg" className="w-full absolute z-0 top-8" />
                <div className="max-w-screen-xl h-full p-8 lg:pt-80 pb-80 lg:pb-32 mx-auto flex flex-col items-center justify-center gap-y-8 z-20">
                    <div className="flex flex-col gap-y-2 items-center justify-center">
                        <p className="font-caprasimo text-white text-5xl lg:text-7xl leading-[2.5rem] hero-stroke">HISTORY OF</p>
                        <p className="font-caprasimo text-yllw text-8xl lg:text-9xl text-center leading-[6rem] hero-stroke">DODO BIRDS</p>
                    </div>
                    <div className="p-4 lg:p-12 bg-llbrwn border-solid border-[7px] border-ddbrwn">
                        <div className="flex flex-col gap-y-4 text-base lg:text-4xl">
                            <p className="">The dodo bird, native to the island of Mauritius, became famous for its trusting nature and was easily hunted by humans. Unfortunately, due to this vulnerability and the introduction of invasive species, the dodo bird went extinct just a century after its discovery. However, we are now celebrating the dodo's legacy through our meme project, infusing humor and creativity into its history. Join us as we bring the dodo bird back to life in the funniest way possible!</p>
                            {/* <p className="">Nunc pellentesque quam quis erat pharetra, non mollis arcu lacinia. Nulla quis commodo metus, nec sollicitudin dui. Pellentesque scelerisque, dui sit amet luctus cursus, risus turpis elementum sapien, vel condimentum ipsum mi et purus. Integer ligula augue, lacinia quis dolor eu, convallis mollis lectus. Vestibulum pharetra volutpat tempus. Nullam tortor risus, dapibus ac turpis ac, venenatis dictum ligula. </p>
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet orci vitae ligula euismod facilisis mollis et metus. Quisque dictum in nisl sed ultrices. Integer non molestie purus, at euismod ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus massa fermentum hendrerit iaculis. Nullam suscipit lobortis tincidunt. Maecenas hendrerit consequat pretium.</p> */}
                        </div>
                    </div>
                    <img src="/his-grass-l.svg" className="absolute bottom-0 left-0" />
                    <img src="/his-grass-r.svg" className="absolute bottom-0 right-0" />
                </div>
            </div>
            <div className="bg-grn w-full h-20" />
        </>
    )
}

export default History