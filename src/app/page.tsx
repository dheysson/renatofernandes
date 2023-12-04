"use client";

import { motion } from 'framer-motion';

import { transition1 } from '../transitions/transition1';
import { transition1_d } from '../transitions/transition1_d';
import { transition1_s } from '../transitions/transition1_s';

import { upward } from '../variants/upward';
import { leftward } from '../variants/leftward';
import { item } from '../variants/item';
import { righttoleft } from '../variants/righttoleft';
import { lefttoright } from '../variants/lefttoright';

//import icons
import {GrFormView} from 'react-icons/gr';
import {FiChevronDown} from 'react-icons/fi';

import {ImInstagram} from 'react-icons/im';
import {ImWhatsapp} from 'react-icons/im';

import {BsSend} from 'react-icons/bs';

import {useState} from 'react'

import emailJS from '@emailjs/browser';

export default function Home() {

  const [form, setForm] = useState({
    name: "" as string,
    email: "" as string,
    message: "" as string
  });

  const [validEmail, setValidEmail] = useState(false);
  const [emptyValue, setEmptyValue] = useState(false);

  const handleChange = (e:any) => {
    setValidEmail(true);

    if(e.target.getAttribute('name') == 'name') {
      setForm({'name': e.target.value, 'email': form.email, 'message': form.message})
    } else if(e.target.getAttribute('name') == 'email') {
      setForm({'name': form.name, 'email': e.target.value, 'message': form.message})
    } else if(e.target.getAttribute('name') == 'message') {
      setForm({'name': form.name, 'email': form.email, 'message': e.target.value})
    }

    
  }

  const handleSubmit = (e:any) => {
    e.preventDefault();

    let emptyValues = Object.values(form).some(obj => obj == "");
    setEmptyValue(emptyValues);

    let validEmail = form["email"].toLocaleLowerCase().match(/[a-z]+@[a-z]+\.com(\.br)*/)
    if(validEmail) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }

    const templateParams = {
        from_name: form["name"], message: form["message"], email: form["email"]
    }

    document.querySelectorAll('input').forEach(element => element.value = "")
    if (!emptyValues && validEmail) {
      emailJS.send("service_01x192s", "template_gsv2s5n", templateParams, "TZPoFP8sOe4vVKffU")
      .then((res:any) => {
        alert('enviado');
      })
    }
  }

  const change = (e:any) => {
    e.preventDefault();

    if(e.currentTarget.parentNode.classList.contains('g1')) {
      document.querySelectorAll('.g1').forEach(element => element.classList.remove('active'));
      e.currentTarget.parentNode.classList.add('active');

    } else if(e.currentTarget.parentNode.classList.contains('g2')) {
      document.querySelectorAll('.g2').forEach(element => element.classList.remove('active'));
      e.currentTarget.parentNode.classList.add('active');
      
    } else if(e.currentTarget.parentNode.classList.contains('g3')) {
      document.querySelectorAll('.g3').forEach(element => element.classList.remove('active'));
      e.currentTarget.parentNode.classList.add('active');
      
    } else if(e.currentTarget.parentNode.classList.contains('g4')) {
      document.querySelectorAll('.g4').forEach(element => element.classList.remove('active'));
      e.currentTarget.parentNode.classList.add('active');

    } else if(e.currentTarget.parentNode.classList.contains('g5')) {
      document.querySelectorAll('.g5').forEach(element => element.classList.remove('active'));
      e.currentTarget.parentNode.classList.add('active');

    }
  }

  const goTo = () => {
    document.querySelector('.about')?.scrollIntoView({behavior: 'smooth'});
  }

  function goTop() {
    document.querySelectorAll('.hero')[0]?.scrollIntoView({behavior: 'smooth'});
    document.querySelectorAll('.hero')[1]?.scrollIntoView({behavior: 'smooth'});
    console.log('que desgraça é essaaaa')
  }

  return (
    <motion.section className='flex flex-col gap-y-40'>
      {/* HERO  */}
      <div className='home w-full h-full hidden sm:flex flex-col justify-center items-center mt-48'>
        {/* HERO  */}
        <div className='flex flex-row w-screen lg:gap-x-20 justify-around lg:justify-center relative px-4'>
          {/* Text & Button */}
          <motion.div variants={lefttoright} initial='variantInit' whileInView='variantAnim' viewport={{once: true}} transition={transition1_d} className='flex flex-col justify-center gap-y-4 lg:gap-y-14 m-2'>
            <div className='w-full max-h-[36rem]'>
              <h3 className='h3'>Olá!</h3>
              <h4 className='h4'>Eu sou Renato Fernandes,</h4>
              <h4 className='h4'>Fotógrafo profissional.</h4>
            </div>

            <button onClick={() => goTo()} className={`btn px-2 py-1 lg:py-[48px] lg:px-[42px] max-w-max text-[2rem]`}><FiChevronDown /></button>
          </motion.div>

          {/* Image  */}
          <motion.div variants={righttoleft} initial='variantInit' whileInView='variantAnim' viewport={{once: true}} transition={transition1_d}>
            <img src="/photographer.webp" alt="" className='w-full max-w-[380px]'/>
          </motion.div>

          <motion.div variants={leftward} initial='variantInit' whileInView='variantAnim' viewport={{once: true}} transition={transition1} className='absolute bottom-0 w-full h-[85%] lg:h-[80%] -z-[5] bg-[#d3d3ff]'></motion.div>
        </div>

        {/* SLIDER  */}
        <div className='slider w-full h-[2rem] relative'>
          <motion.div variants={leftward} initial='variantInit' animate='variantAnim' transition={transition1_d} className='absolute items-center left-0 w-full h-full bg-[#131313] text-[#fafafa] text-[1.2rem] font-secondary flex flex-row'>
            <div className='slider-track_d'>
                <p className='d'>tenha a melhor versão de ti</p>
                <p className='d'>tenha a melhor versão de ti</p>
                <p className='d'>tenha a melhor versão de ti</p>
                <p className='d'>tenha a melhor versão de ti</p>
                <p className='d'>tenha a melhor versão de ti</p>
                <p className='d'>tenha a melhor versão de ti</p>
            </div>
            <div className='slider-track_d'>
                <p className='d'>tenha a melhor versão de ti</p>
                <p className='d'>tenha a melhor versão de ti</p>
                <p className='d'>tenha a melhor versão de ti</p>
                <p className='d'>tenha a melhor versão de ti</p>
                <p className='d'>tenha a melhor versão de ti</p>
                <p className='d'>tenha a melhor versão de ti</p>
            </div>
            
          </motion.div>
        </div>
        
      </div>

      {/* HERO - MOBILE  */}
      <div className='w-full h-full flex sm:hidden flex-col justify-center items-center mt-48'>
        {/* HERO  */}
        <div className='flex flex-row w-screen lg:gap-x-40 justify-around lg:justify-center relative pl-4'>
          {/* Text & Button */}
          <motion.div variants={lefttoright} initial='variantInit' whileInView='variantAnim' viewport={{once: true}} transition={transition1_d} className='flex flex-col justify-center gap-y-4 lg:gap-y-14 my-4 mx-1'>
            <div className={`w-[16rem] lg:w-full max-w-[36rem]`}>
              <h3 className='h3'>Olá!</h3>
              <h4 className='h4'>Eu sou Renato Fernandes,</h4>
              <h4 className='h4'>Fotógrafo profissional.</h4>
            </div>

            <button onClick={() => goTo()} className={`btn px-2 py-1 lg:py-[48px] lg:px-[42px] max-w-max text-[2rem]`}><FiChevronDown /></button>
           </motion.div>

          {/* Image  */}
          <motion.div variants={righttoleft} initial='variantInit' whileInView='variantAnim' viewport={{once: true}} transition={transition1_d}>
            <img src="/photographer.webp" alt="" className='w-full max-w-[256px] rounded-xl'/>
          </motion.div>

          <motion.div variants={leftward} initial='variantInit' whileInView='variantAnim' viewport={{once: true}} transition={transition1} className='absolute bottom-0 w-full h-[82%] lg:h-[72%] -z-[5] bg-[#d3d3ff]'></motion.div>
        </div>
        <div>

        {/* SLIDER  */}
        <div className='slider w-full h-[1.5rem] relative'>
          <motion.div variants={leftward} initial='variantInit' whileInView='variantAnim' viewport={{once: true}} transition={transition1_d} className='font-secondary items-center absolute left-0 w-full h-full bg-[#131313] text-[#fafafa] text-[0.75rem] flex flex-row'>
            <div className='slider-track_d'>
                  <p className='d'>tenha a melhor versão de ti</p>
                  <p className='d'>tenha a melhor versão de ti</p>
              </div>
              <div className='slider-track_d'>
                  <p className='d'>tenha a melhor versão de ti</p>
                  <p className='d'>tenha a melhor versão de ti</p>
              </div>
          </motion.div>
        </div>

        <motion.img variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1_d} src="/photographer.webp" alt="" />
        </div>
      </div>

      {/* SOBRE MIM  */}
      <motion.div className='about w-screen max-h-max relative'>
        <div className='relative w-screen'>
          <motion.h2 variants={upward} initial='variantInit' whileInView='variantAnim' viewport={{once: true}} transition={transition1_d}  className='h2 aboutme my-3 lg:my-8 lg:mx-0 w-screen text-center'>Sobre mim</motion.h2>
        </div>
        <div className='flex flex-col gap-y-8 lg:gap-y-0 lg:flex-row w-screen lg:gap-x-40 justify-around lg:justify-center relative items-center px-4'>
          {/* Text & Button */}
          <motion.div variants={lefttoright} initial='variantInit' whileInView='variantAnim' viewport={{once: true}} transition={transition1_d} className='order-2 flex flex-col justify-center gap-y-4 lg:gap-y-14 m-8'>
            <div className='w-full max-w-[36rem]'>
              <h3 className='p small sm:medium'>Durante a pandemia, enquanto as aulas eram realizadas remotamente, percebi que eu estava muito tempo ocioso. No entanto, deparei-me com um <b>interessante</b> nicho de conteúdo relacionando à fotografia, 
              o que despertou minha <b>curiosidade</b>. Comecei a experimentar tirar fotos com meu celular, capturando desde objetos até retratos de amigos e familiares.
              </h3>
              <br />
              <h3 className='p small sm:medium'>
                Com o desejo de aprimorar meu <b>conhecimento</b>, comecei a realizar ensaios utilizando um equipamento semiprofissional. 
                Entretanto, precisei me afastar da fotografia por um período. Agora, em 2023, enquanto trabalho no ramo da beleza e estética, voltei a praticar fotografia 
                visando aumentar a <b>visibilidade</b> e <b>reconhecimento</b> dos meus trabalhos.
              </h3>
            </div>
          </motion.div>

          {/* Image  */}
          <motion.div variants={righttoleft} initial='variantInit' whileInView='variantAnim' viewport={{once: true}} transition={transition1_d} className='order-1 flex flex-row justify-center'>
            <img src="/photographer2.png" alt="" className='w-[50%] lg:w-full max-w-[480px] rounded-xl lg:rounded-t-xl lg:rounded-b-none'/>
          </motion.div>

        </div>

        <div className='slider w-full h-[2rem] relative'>
          <motion.div variants={leftward} initial='variantInit' animate='variantAnim' transition={transition1_d} className='absolute items-center left-0 w-full h-full bg-[#131313] text-[#fafafa] text-[1.2rem] font-secondary flex flex-row'>
            <div className='slider-track'>
                <p>interessante</p>
                <p>curiosidade</p>
                <p>conhecimento</p>
                <p>visibilidade</p>
                <p>reconhecimento</p>
            </div>
            <div className='slider-track'>
                <p>interessante</p>
                <p>curiosidade</p>
                <p>conhecimento</p>
                <p>visibilidade</p>
                <p>reconhecimento</p>
            </div>
            <div className='slider-track'>
                <p>interessante</p>
                <p>curiosidade</p>
                <p>conhecimento</p>
                <p>visibilidade</p>
                <p>reconhecimento</p>
            </div>
            <div className='slider-track'>
                <p>interessante</p>
                <p>curiosidade</p>
                <p>conhecimento</p>
                <p>visibilidade</p>
                <p>reconhecimento</p>
            </div>
            
          </motion.div>
        </div>

        <motion.div variants={leftward} initial='variantInit' whileInView='variantAnim' viewport={{once: true}} transition={transition1} className='absolute bottom-0 w-full h-[82%] lg:h-[88%] -z-[5] bg-[#d3d3ff]'></motion.div>
      </motion.div>

      {/* PORTFOLIO  */}
      <motion.div className='portfolio'>
        <div className='relative w-screen'>
          <motion.div variants={leftward} initial='variantInit' whileInView='variantAnim' transition={transition1_d} viewport={{once: true}} className='absolute left-0 bottom-0 -z-[1] h-[65%] bg-[#d3d3ff]'></motion.div >
          <motion.h2 variants={upward} initial='variantInit' whileInView='variantAnim' viewport={{once: true}} transition={transition1_d}  className='h2 portfolio my-20 lg:mx-0 w-screen text-center'>Portfólio</motion.h2>
        </div>
        <div className='container w-full max-w-[75rem] mx-auto flex flex-col gap-y-10 items-center lg:items-start'>
          <div className='ensaio_estudio'>
            <motion.h4 variants={upward} initial='variantInit' whileInView='variantAnim' viewport={{once: true}} transition={transition1} className='h4 my-4 font-secondary'>Ensaio de estúdio</motion.h4>
            <motion.div variants={upward} initial='variantInit' whileInView='variantAnim' viewport={{once: true}} transition={transition1_d} className='gallery'>
              <div className='gallery_div active g1'>
                <img className='gallery_img' src="/portfolio/ensaioestudio/gallery (1).webp" alt="" />
                <button className='gallery_view' onClick={(e) => change(e)}><GrFormView  /></button>
              </div>
              <div className='gallery_div g1'>
                <img className='gallery_img' src="/portfolio/ensaioestudio/gallery (2).webp" alt="" />
                <button className='gallery_view' onClick={(e) => change(e)}><GrFormView  /></button>
              </div>
              <div className='gallery_div g1'>
                <img className='gallery_img' src="/portfolio/ensaioestudio/gallery (3).webp" alt="" />
                <button className='gallery_view' onClick={(e) => change(e)}><GrFormView  /></button>
              </div>
            </motion.div>
          </div>
          <div className='ensaio_infantil-'>
            <motion.h4 variants={upward} initial='variantInit' whileInView='variantAnim' viewport={{once: true}} transition={transition1} className='h4 my-4 font-secondary'>Ensaio infantil</motion.h4>
            <motion.div variants={upward} initial='variantInit' whileInView='variantAnim' viewport={{once: true}} transition={transition1_d} className='gallery'>
              <div className='gallery_div active g2'>
                <img className='gallery_img' src="/portfolio/ensaioinfantil/gallery (1).webp" alt="" />
                <button className='gallery_view' onClick={(e) => change(e)}><GrFormView  /></button>
              </div>
              <div className='gallery_div g2'>
                <img className='gallery_img' src="/portfolio/ensaioinfantil/gallery (2).webp" alt="" />
                <button className='gallery_view' onClick={(e) => change(e)}><GrFormView  /></button>
              </div>
              <div className='gallery_div g2'>
                <img className='gallery_img' src="/portfolio/ensaioinfantil/gallery (3).webp" alt="" />
                <button className='gallery_view' onClick={(e) => change(e)}><GrFormView  /></button>
              </div>
              <div className='gallery_div g2'>
                <img className='gallery_img' src="/portfolio/ensaioinfantil/gallery (4).webp" alt="" />
                <button className='gallery_view' onClick={(e) => change(e)}><GrFormView  /></button>
              </div>
            </motion.div>
          </div>
          <div className='ensaio_moda'>
            <motion.h4 variants={upward} initial='variantInit' whileInView='variantAnim' viewport={{once: true}} transition={transition1} className='h4 my-4 font-secondary'>Ensaio de moda</motion.h4>
            <motion.div variants={upward} initial='variantInit' whileInView='variantAnim' viewport={{once: true}} transition={transition1_d} className='gallery'>
              <div className='gallery_div active g3'>
                <img className='gallery_img' src="/portfolio/ensaiomoda/gallery (1).webp" alt="" />
                <button className='gallery_view' onClick={(e) => change(e)}><GrFormView  /></button>
              </div>
              <div className='gallery_div g3'>
                <img className='gallery_img' src="/portfolio/ensaiomoda/gallery (2).webp" alt="" />
                <button className='gallery_view' onClick={(e) => change(e)}><GrFormView  /></button>
              </div>
              <div className='gallery_div g3'>
                <img className='gallery_img' src="/portfolio/ensaiomoda/gallery (3).webp" alt="" />
                <button className='gallery_view' onClick={(e) => change(e)}><GrFormView  /></button>
              </div>
              <div className='gallery_div g3'>
                <img className='gallery_img' src="/portfolio/ensaiomoda/gallery (4).webp" alt="" />
                <button className='gallery_view' onClick={(e) => change(e)}><GrFormView  /></button>
              </div>
            </motion.div>
          </div>
          <div className='individual'>
            <motion.h4 variants={upward} initial='variantInit' whileInView='variantAnim' viewport={{once: true}} transition={transition1} className='h4 my-4 font-secondary'>Temáticos e individuais</motion.h4>
            <motion.div variants={upward} initial='variantInit' whileInView='variantAnim' viewport={{once: true}} transition={transition1_d} className='gallery'>
              <div className='gallery_div active g5'>
                <img className='gallery_img' src="/portfolio/individual/gallery (1).webp" alt="" />
                <button className='gallery_view' onClick={(e) => change(e)}><GrFormView  /></button>
              </div>
              <div className='gallery_div g5'>
                <img className='gallery_img' src="/portfolio/individual/gallery (2).webp" alt="" />
                <button className='gallery_view' onClick={(e) => change(e)}><GrFormView  /></button>
              </div>
              <div className='gallery_div g5'>
                <img className='gallery_img' src="/portfolio/individual/gallery (3).webp" alt="" />
                <button className='gallery_view' onClick={(e) => change(e)}><GrFormView  /></button>
              </div>
            </motion.div>
          </div>
          <div className='makingof'>
            <motion.h4 variants={upward} initial='variantInit' whileInView='variantAnim' viewport={{once: true}} transition={transition1} className='h4 my-4 font-secondary'>Making of</motion.h4>
            <motion.div variants={upward} initial='variantInit' whileInView='variantAnim' viewport={{once: true}} transition={transition1_d} className='gallery'>
              <div className='gallery_div active g4'>
                <img className='gallery_img' src="/portfolio/makingof/gallery (1).webp" alt="" />
                <button className='gallery_view' onClick={(e) => change(e)}><GrFormView  /></button>
              </div>
              <div className='gallery_div g4'>
                <img className='gallery_img' src="/portfolio/makingof/gallery (2).webp" alt="" />
                <button className='gallery_view' onClick={(e) => change(e)}><GrFormView  /></button>
              </div>
              <div className='gallery_div g4'>
                <img className='gallery_img' src="/portfolio/makingof/gallery (3).webp" alt="" />
                <button className='gallery_view' onClick={(e) => change(e)}><GrFormView  /></button>
              </div>
              <div className='gallery_div g4'>
                <img className='gallery_img' src="/portfolio/makingof/gallery (4).webp" alt="" />
                <button className='gallery_view' onClick={(e) => change(e)}><GrFormView  /></button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* CONTATO */}
      <div className='contact hidden container lg:flex flex-row items-center relative w-screen'>'
        <div className='flex flex-col items-center w-screen'>
          <motion.h2 variants={upward} initial='variantInit' whileInView='variantAnim' transition={transition1} viewport={{once: true}} className='h2 my-10 text-center'>Contate-me</motion.h2>
          <motion.div variants={upward} initial='variantInit' whileInView='variantAnim' transition={transition1_d} viewport={{once: true}} className='flex flex-row gap-x-10 p-4 lg:p-10 '>
            <div className='w-full max-w-[24rem] p-4 lg:p-0'>
              <form onSubmit={handleSubmit} className='flex flex-col gap-y-8'>
                <div className='flex flex-row gap-x-2'>
                  <input type="text" name='name' id='name' placeholder='nome' className='w-[35%]' onChange={(e) => handleChange(e)}/>
                  <input type="email" name="email" id="email" placeholder='email' className='w-[65%]' onChange={(e) => handleChange(e)}/>
                </div>
                <input type="text" name='message' id='message' placeholder='mensagem' onChange={(e) => handleChange(e)}/>
                
                <button className='btn px-6 lg:px-[42px] max-w-max'> enviar </button>
              </form>
            </div>
            {/* <div className='flex flex-col gap-y-8'> */}
              {/* EMAIL  */}
              {/* <div>
                <p className='p medium font-poppins'>Email</p>
                <p className='p regular font-poppins text-[#000000cc]'>emailhere@gmail.com</p>
              </div> */}
              {/* ICONS  */}
              {/* <div className='flex flex-col lg:flex-row gap-y-4 lg:gap-x-14'> */}
                {/* <button className='btn px-4'>
                  <a href="#"><ImFacebook className='w-6 h-6 hover:scale-110'/></a>
                </button> */}
                {/* <button className='btn px-4'>
                  <a href="https://www.instagram.com/_r.f.s._fotografias"><ImInstagram className='w-6 h-6 hover:scale-110'/></a>
                </button>
                <button className="btn px-4">
                  <a href="https://wa.me/5569993727578"><ImWhatsapp className='w-6 h-6 hover:scale-110'/></a>
                </button> */}
              {/* </div> */}
            {/* </div> */}
          </motion.div>
          <br />
          <button className='btn text-[1rem] max-w-max uppercase m-4' onClick={() => goTop()}>Voltar para o topo</button>
        </div>

        <div className='absolute w-screen bottom-0 h-[89%] lg:h-[84%] -z-[1] bg-[#d3d3ff]'></div>
      </div>

      {/* CONTATO - MOBILE */}
      <div className='flex container lg:hidden flex-col items-center relative'>
        <div className='absolute w-screen bottom-0 h-[89%] lg:h-[80%] -z-[1] bg-[#d3d3ff]'></div>
        <motion.h2 variants={upward} initial='variantInit' whileInView='variantAnim' transition={transition1} viewport={{once: true}} className='h2 my-10 text-center'>Contate-me</motion.h2>
        <motion.div variants={upward} initial='variantInit' whileInView='variantAnim' transition={transition1_d} viewport={{once: true}} className='flex flex-row justify-evenly p-4 lg:p-10 '>
          <div className='w-full max-w-[24rem] p-4 lg:p-0'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-y-8'>
              <div className='flex flex-row gap-x-2'>
                <input type="text" name='name' id='name' placeholder='nome' className='w-[35%]' onChange={(e) => handleChange(e)}/>
                <input type="email" name="email" id="email" placeholder='email' className='w-[65%]' onChange={(e) => handleChange(e)}/>
              </div>
              <input type="text" name='message' id='message' placeholder='mensagem' onChange={(e) => handleChange(e)}/>
              <br />
              <div className='flex flex-row justify-between'>
                <button className='btn px-6 lg:px-[42px] text-[1rem] max-w-max'> ENVIAR </button>

                <div className='flex flex-row gap-x-2'>
                  <button className='btn px-4'>
                    <a target='_blank' href="https://www.instagram.com/_r.f.s._fotografias"><ImInstagram className='w-6 h-6 hover:scale-110'/></a>
                  </button>
                  <button className="btn px-4">
                    <a target='_blank' href="https://wa.me/5569993727578"><ImWhatsapp className='w-6 h-6 hover:scale-110'/></a>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </motion.div>
        <br />
        <button className='btn_l text-[1rem] px-4 lg:px-[42px] max-w-max uppercase m-4' onClick={() => goTop()}>Voltar para o topo</button>
      </div>

    </motion.section>
  )
}
