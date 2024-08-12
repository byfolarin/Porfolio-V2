import React from 'react'
import { motion } from "framer-motion"

const Project = () => {
  return (
    <div>
      <div className='flex text-white gap-2'>
        <h2 className='text-[#3E3E3E] font-mono'>23:11PM</h2>
        <h2 className='text-[#F13C00] font-mono cursor-pointer'>PROJECTS</h2>
      </div>

            <div className='text-[white] font-mono mt-8 cursor-pointer'>


            <motion.p whileHover={{ x: 10 }} className='hover:text-[#F13C00]'>Blank CMS</motion.p>

            <motion.p whileHover={{ x: 10 }} className='hover:text-[#F13C00]'>Playgroud</motion.p>

            <motion.p whileHover={{ x: 10 }} className='hover:text-[#F13C00]'>Selah</motion.p>

            <motion.p whileHover={{ x: 10 }} className='hover:text-[#F13C00]'>Musicanny</motion.p>

            <motion.p whileHover={{ x: 10 }} className='hover:text-[#F13C00]'>ZigZag</motion.p>

            <motion.p whileHover={{ x: 10 }} className='hover:text-[#F13C00]'>Zenith Finance</motion.p>

            </div>

    </div>
  )
}

export default Project
