"use client";

import {motion} from 'framer-motion';

import {transition1} from '../transitions/transition1';

import { Playfair_Display } from 'next/font/google';
const playfair = Playfair_Display({subsets: ['latin'], weight: ['400']});

import {CgMenuRight} from 'react-icons/cg';

export default function Header() {
    return (
        <motion.header initial={{opacity: 0}} animate={{opacity: 1}} transition={transition1} className='fixed z-50 flex flex-row w-screen justify-between h-[8rem] p-2 lg:p-10'>
            <img className='w-[96px] h-[54px] rounded-md' src="/logo.jpg" alt="" />
            <ul className='hidden lg:flex flex-row gap-x-12 text-[#131313]'>
                <li><a data-index="0" href="#" className='a'>Início</a></li>
                {/* <li><a data-index="1" href="#" className='a'>Sobre mim</a></li> */}
                <li><a data-index="2" href="#" className='a'>Portfólio</a></li>
                <li><a data-index="3" href="#" className='a'>Contato</a></li>
            </ul>
        </motion.header>
    )
}