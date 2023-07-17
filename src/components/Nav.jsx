import React, { useState, useEffect } from 'react'
import { navLinks } from '../constants'

const Nav = () => {
    const [show, setShow] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showNav, setshowNav] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    const showNavBar = () => {
        setshowNav(current => !current)
        console.log(showNav)
    }

    const controlNavbar = () => {
        if (scrollY > 150) {
            setShow(true);
        }
        else {
            setShow(false)
        }
    };
    
    return (
        <>
            <nav className={`p-4 pr-8 flex justify-between items-center max-w-screen-xl mx-auto rounded-full transition-all ease-in-out duration-300 ${show ? 'bg-white/50 backdrop-blur-lg m-4 mx-4 lg:mx-auto border-solid border-[1px] border-white/80' : 'bg-transparent m-0 border-solid border-[1px] border-transparent'}`}>
                <div className="h-16 w-16">
                    <img src="/dodologo.webp" alt="" className="" />
                </div>
                <div className="gap-x-1 md:gap-x-4 lg:gap-x-12 hidden md:flex">
                    {navLinks.map((link, i) =>
                        <a href={link.link} key={i}><p className="font-caprasimo text-drkblu hover:text-white hover:-translate-y-[2px] hover:drop-shadow-sm transition-all ease-in-out duration-300">{link.name}</p></a>
                    )}
                </div>
            </nav>
        </>
    )
}

export default Nav