"use client";

import {motion} from 'framer-motion';

import {transition1} from '../transitions/transition1';

import { Playfair_Display } from 'next/font/google';
const playfair = Playfair_Display({subsets: ['latin'], weight: ['400']});

import {CgMenuRight} from 'react-icons/cg';

import {ImInstagram} from 'react-icons/im';
import {ImWhatsapp} from 'react-icons/im';

export default function Header() {

    function scrollto(target:string) {
        document.querySelector(`.${target}`)?.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <motion.header initial={{opacity: 0}} animate={{opacity: 1}} transition={transition1} className='fixed z-10 flex flex-row w-full justify-between lg:h-[8rem] p-2 lg:p-10'>
            <img className='w-[96px] h-[54px] rounded-md' src="/logo.webp" alt="" />
            <ul className='hidden lg:flex flex-row gap-x-12 text-[#131313]'>
                <li> <a onClick={() => scrollto('home')}  className='a text-[1.1rem] cursor-pointer'>Início</a> </li>
                <li> <a onClick={() => scrollto('about')} className='a text-[1.1rem] cursor-pointer'>Sobre mim</a> </li>
                <li> <a onClick={() => scrollto('portfolio')}  className='a text-[1.1rem] cursor-pointer'>Portfólio</a> </li>
                <li> <a onClick={() => scrollto('contact')} className='a text-[1.1rem] cursor-pointer'>Contato</a> </li>
                <li> <a target='_blank' href="https://www.instagram.com/_r.f.s._fotografias" className='text-[1rem]'><ImInstagram /></a> </li>
                <li> <a target='_blank' href="https://wa.me/5569993727578" className='text-[1rem]'><ImWhatsapp /></a> </li>
            </ul>
            <ul className='lg:hidden flex flex-row gap-x-8 m-4'>
                <li><a target='_blank' href="https://www.instagram.com/_r.f.s._fotografias"><ImInstagram className="w-5 h-5" /></a></li>
                <li><a target='_blank' href="https://wa.me/5569993727578"><ImWhatsapp className="w-5 h-5" /></a></li>
            </ul>
        </motion.header>
    )
}