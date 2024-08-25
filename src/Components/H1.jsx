import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const H1 = () => {
  const [title, setTitle] = useState("DESIGNER")

  useEffect(() => {
    const interval = setInterval(() => {
      setTitle(prev => prev === "DESIGNER" ? "ENGINEER" : "DESIGNER")
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-screen flex items-center justify-end">
      <p className='font-mono text-[white] mb-[460px]'>PRODUCT</p>

      <div className="w-full flex justify-center lg:justify-end">
        <AnimatePresence mode="wait">
          <motion.h1
            key={title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`text-[128px] lg:text-[350px] tracking-[-0.05em] leading-11 lg:pb-[300px] lg:pr-4 ${
              title === "ENGINEER" ? 'text-[#F13C00]' : 'text-[#434343]'
            }`}
          >
            {title}
          </motion.h1>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default H1