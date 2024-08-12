import React from 'react'
import Project from './Project'
import { motion } from "framer-motion"

const ImgChange = () => {
  return (
    
    <div className='flex  flex-row items-start mt-8 gap-64'>

        
      <Project />


      <div  className='flex items-start justify-center gap-2 mt-6 cursor-pointer'>
            <motion.div className='w-[80px] h-[87px] bg-[#3E3E3E]'></motion.div>
            <div className='w-[80px] h-[80px] bg-[#3E3E3E]'></div>
            <div className='w-[80px] h-[87px] bg-[#3E3E3E]'></div>
            <div className='w-[80px] h-[80px] bg-[#3E3E3E]'></div>
            <div className='w-[80px] h-[87px] bg-[#3E3E3E]'></div>
            <div className='w-[80px] h-[80px] bg-[#3E3E3E]'></div>
      </div>


    </div>


   
  )
}

export default ImgChange
