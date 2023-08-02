import React from 'react'
import { Parallax } from 'react-scroll-parallax'

const Roadmap = () => {
    return (
        <>
            <div className="bg-dbrwn w-full flex flex-col items-center justify-center relative" id='roadmap'>
                <img src="/roadmap-trans.svg" alt="" className="w-full" />
                <Parallax translateX={[-75, 15]} className="absolute top-0 left-0">
                    <img src="/rm-bone1.svg" alt="" className='h-40 lg:h-auto' />
                </Parallax>

                <Parallax translateX={[35, 15]} className="absolute top-0 right-0">
                    <img src="/rm-bone2.svg" alt="" className='h-40 lg:h-auto' />
                </Parallax>

                <Parallax translateX={[-35, 15]} className="absolute bottom-0 left-0">
                    <img src="/rm-bone3.svg" alt="" className='h-40 lg:h-auto' />
                </Parallax>

                <Parallax translateX={[35, 15]} className="absolute bottom-0 right-0">
                    <img src="/rm-bone4.svg" alt="" className='h-40 lg:h-auto' />
                </Parallax>
                <div className="max-w-screen-xl h-full p-8 py-32 mx-auto flex flex-col items-center justify-center gap-y-8 z-20">
                    <div className="flex flex-col items-center justify-center gap-y-8">
                        <p className="font-caprasimo text-yllw text-4xl md:text-8xl lg:text-9xl text-center leading-[1rem] md:leading-[4rem] lg:leading-[6rem] token-stroke">ROADMAP</p>
                        <p className="text-white text-center text-base md:text-xl max-w-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet orci vitae ligula euismod facilisis mollis et metus. </p>
                    </div>
                    <div className="flex flex-col w-full h-auto items-center justify-center relative">
                        <Parallax translateX={[35, 15]} className="w-full h-auto flex flex-row-reverse items-center justify-center relative justify-self-end">
                            <div className="w-full text-ddbrwn flex flex-col items-center justify-center absolute gap-y-4">
                                <p className="font-caprasimo text-2xl md:text-4xl">ROADMAP 1</p>
                                <div className="font-bold text-sm md:text-xl">
                                    <p className="">• Dodo Launch.</p>
                                    <p className="">• Community Building.</p>
                                    <p className="">• Dextools socials update.</p>
                                    <p className="">• Ads on various crypto websites.</p>
                                </div>
                            </div>
                            <img src="/rm-rock1.svg" alt="" className="" />
                        </Parallax>

                        <Parallax translateX={[-35, 15]} className="w-full flex items-center justify-center relative justify-self-start">
                            <div className="w-full text-ddbrwn flex flex-col items-center justify-center absolute gap-y-4">
                                <p className="font-caprasimo text-2xl md:text-4xl">ROADMAP 2</p>
                                <div className="font-bold text-sm md:text-xl">
                                    <p className="">• Twitter trending.</p>
                                    <p className="">• Collaborations and Partnerships.</p>
                                    <p className="">• Viral marketing campaigns.</p>
                                    <p className="">• CMC and CG listing.</p>
                                    <p className="">• Listing on exchanges.</p>
                                </div>
                            </div>
                            <img src="/rm-rock2.svg" alt="" className="" />
                        </Parallax>

                        <Parallax translateX={[35, 15]} div className="w-full h-auto flex flex-row-reverse items-center justify-center relative justify-self-end">
                            <div className="w-full text-ddbrwn flex flex-col items-center justify-center absolute gap-y-4">
                                <p className="font-caprasimo text-2xl md:text-4xl">ROADMAP 3</p>
                                <div className="font-bold text-base md:text-xl">
                                    <p className="">COMING SOON.</p>
                                </div>
                            </div>
                            <img src="/rm-rock3.svg" alt="" className="" />
                        </Parallax>

                        <Parallax translateX={[-35, 15]} className="w-full flex items-center justify-center relative justify-self-start">
                            <div className="w-full text-ddbrwn flex flex-col items-center justify-center absolute gap-y-4">
                                <p className="font-caprasimo text-2xl md:text-4xl">ROADMAP 4</p>
                                <div className="font-bold text-base md:text-xl">
                                    <p className="">COMING SOON.</p>
                                </div>
                            </div>
                            <img src="/rm-rock4.svg" alt="" className="" />
                        </Parallax>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Roadmap