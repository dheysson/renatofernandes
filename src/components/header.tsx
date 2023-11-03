"use client";

import {motion} from 'framer-motion';

import {transition1} from '../transitions/transition1';

import { Playfair_Display } from 'next/font/google';
const playfair = Playfair_Display({subsets: ['latin'], weight: ['400']});

import {CgMenuRight} from 'react-icons/cg';

import {ImInstagram} from 'react-icons/im';
import {ImWhatsapp} from 'react-icons/im';

export default function Header() {
    return (
        <motion.header initial={{opacity: 0}} animate={{opacity: 1}} transition={transition1} className='fixed z-50 flex flex-row w-screen justify-between lg:h-[8rem] p-2 lg:p-10'>
            <img className='w-[96px] h-[54px] rounded-md' src="/logo.jpg" alt="" />
            <ul className='hidden lg:flex flex-row gap-x-12 text-[#131313]'>
                <li> <a data-index="0" href="#" className='a text-[1.1rem]'>Início</a> </li>
                {/* <li><a data-index="1" href="#" className='a'>Sobre mim</a></li> */}
                <li> <a data-index="2" href="#" className='a text-[1.1rem]'>Sobre mim</a> </li>
                <li> <a data-index="3" href="#" className='a text-[1.1rem]'>Portfólio</a> </li>
                <li> <a data-index="4" href="#" className='a text-[1.1rem]'>Contato</a> </li>
                <li> <a href="https://www.instagram.com/_r.f.s._fotografias" className='text-[1rem]'><ImInstagram /></a> </li>
                <li> <a href="https://wa.me/5569993727578" className='text-[1rem]'><ImWhatsapp /></a> </li>
            </ul>
        </motion.header>
    )
}