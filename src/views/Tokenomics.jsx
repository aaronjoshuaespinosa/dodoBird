import React from 'react'
import { TbClipboard } from "react-icons/tb";
import { Parallax } from 'react-scroll-parallax'

const Tokenomics = () => {
    return (
        <>
            <div className="bg-brwn w-full flex flex-col items-center justify-center relative" id='tokenomics'>
                <img src="/token-trans.svg" alt="" className="w-full" />
                <Parallax translateX={[-35, 15]} className="absolute top-0 left-0">
                    <img src="/token-bone1.svg" alt="" className='h-40 lg:h-auto' />
                </Parallax>

                <Parallax translateX={[35, 15]} className="absolute bottom-64 right-0">
                    <img src="/token-bone2.svg" alt="" className='h-40 lg:h-auto' />
                </Parallax>
                <div className="max-w-screen-xl h-full p-8 pt-32 mx-auto flex flex-col items-center justify-center gap-y-8 z-20">
                    <div className="flex flex-col items-center justify-center gap-y-8">
                        <p className="font-caprasimo text-yllw text-4xl md:text-8xl lg:text-9xl text-center leading-[1rem] md:leading-[4rem] lg:leading-[6rem] token-stroke">TOKENOMICS</p>
                        <p className="text-white text-center text-base md:text-xl max-w-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet orci vitae ligula euismod facilisis mollis et metus. </p>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-y-4 justify-between w-full">
                        <Parallax translateX={[-25, 0]} className="text-center font-caprasimo token-stroke">
                            <p className="text-white text-9xl md:text-[18rem] md:leading-[16rem]">5%</p>
                            <p className="text-llbrwn text-6xl lg:text-8xl">buy tax</p>
                        </Parallax>
                        <Parallax translateX={[25, 0]} className="text-center font-caprasimo token-stroke">
                            <p className="text-white text-9xl md:text-[18rem] md:leading-[16rem]">5%</p>
                            <p className="text-llbrwn text-6xl lg:text-8xl">sell tax</p>
                        </Parallax>
                    </div>
                    <div className="flex gap-x-2 items-center justify-center py-4 text-ddbrwn">
                        <TbClipboard className='text-5xl cursor-pointer hover:scale-[1.06] transition-all ease-in-out duration-300' />
                        <p className="font-caprasimo text-xl lg:text-2xl">0xb794f5ea0ba39494...</p>
                    </div>
                    <div className="text-ddbrwn flex flex-col lg:flex-row gap-y-4 gap-x-8">
                        <div className="relative flex items-center justify-center cursor-pointer hover:scale-[1.08] transition-all ease-in-out duration-300 w-60 lg:w-auto">
                            <img src="/button.svg" alt="" className="" />
                            <p className="text-2xl lg:text-4xl text-center font-caprasimo absolute">CHARTS</p>
                        </div>
                        <div className="relative flex items-center justify-center cursor-pointer hover:scale-[1.08] transition-all ease-in-out duration-300 w-60 lg:w-auto">
                            <img src="/button.svg" alt="" className="" />
                            <p className="text-2xl lg:text-4xl text-center font-caprasimo absolute">BUY TOKEN</p>
                        </div>
                    </div>
                </div>
                <img src="/token-rocks.svg" alt="" className="w-full" />
            </div>
        </>
    )
}

export default Tokenomics