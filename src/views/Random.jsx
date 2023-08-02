import React from 'react'
import { Parallax } from 'react-scroll-parallax'

const Random = () => {
    return (
        <>
            <div className="bg-lbrwn w-full flex flex-col items-center justify-center relative">
                <img src="/random-grass.svg" alt="" className="w-full" />
                <div className="max-w-screen-xl h-full p-8 mx-auto flex flex-col items-center justify-center gap-y-8 z-20">
                    <div className="font-caprasimo text-white token-stroke flex flex-col lg:flex-row gap-y-8 relative w-full h-full">
                        <Parallax translateX={[-25, 35]} className='w-full'>
                            <p className="text-8xl w-full">Lorem ipsum dolor set</p>
                        </Parallax>
                        <div className="flex flex-col w-full">
                            <Parallax translateX={[35, 15]}>
                                <img src="/random-stone.svg" alt="" className="" />
                            </Parallax>
                            <Parallax translateX={[15, -15]}>
                                <p className="text-7xl text-right">Lorem ipsum dolor set</p>
                            </Parallax>
                        </div>
                    </div>
                </div>
                <img src="/random-rocks.svg" alt="" className="w-full" />
            </div>
        </>
    )
}

export default Random