import React from 'react'
import Project from './Project'
import { motion } from "framer-motion"
import Proj1 from './ProjectImg/Proj1.jpeg'
import Proj2 from './ProjectImg/Proj2.jpeg'
import Proj3 from './ProjectImg/Proj3.jpeg'
import Proj4 from './ProjectImg/Proj4.jpeg'
import Proj5 from './ProjectImg/Proj5.jpeg'

const ImgChange = () => {
  return (
    
    <div className='flex  flex-row items-start mt-8 gap-64'>      
      <Project />
      <div  className='flex items-start justify-center gap-2 mt-6 cursor-pointer'>

            <div className='w-[80px] h-[87px] bg-[#3E3E3E]'>
               <img src={Proj2} alt="" className='object-cover w-full h-full'/>
            </div>

            <div className='w-[80px] h-[80px] bg-[#3E3E3E]'>
                <img src={Proj1} alt="" className='object-cover w-full h-full'/>
            </div>

            <div className='w-[80px] h-[87px] bg-[#3E3E3E]'>
                <img src={Proj3} alt="" className='object-cover w-full h-full' />
            </div>

            <div className='w-[80px] h-[80px] bg-[#3E3E3E]'>
                <img src={Proj4} alt="" className='object-cover w-full h-full' />
            </div>

            <div className='w-[80px] h-[87px] bg-[#3E3E3E]'>
                <img src={Proj5} alt="" className='object-cover w-full h-full' />
            </div>

            <div className='w-[80px] h-[80px] bg-[#3E3E3E]'></div>
      </div>


    </div>


   
  )
}

export default ImgChange
