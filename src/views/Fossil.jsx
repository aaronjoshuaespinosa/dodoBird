import React from 'react'
import { Parallax } from 'react-scroll-parallax'

const Tokenomics = () => {
    return (
        <>
            <div className="bg-dbrwn w-full flex flex-col items-center justify-center relative overflow-y-hidden" id='fossil'>
                <div className="max-w-screen-xl h-full p-8 mx-auto flex flex-col items-center justify-center gap-y-8 z-20">
                    <Parallax rotate={[45, -45]} scale={[0.9, 1]} className='w-full'>
                        <img src="/fossil.svg" alt="" />
                    </Parallax>
                </div>

                <img src="/fossil-rocks.svg" alt="" className="w-full absolute bottom-0" />

            </div>
        </>
    )
}

export default Tokenomics