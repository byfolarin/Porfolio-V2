import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const H1 = () => {
  const [isDesigner, setIsDesigner] = useState(true)
  const designerText = "DESIGNER"
  const engineerText = "ENGINEER"

  useEffect(() => {
    const interval = setInterval(() => {
      setIsDesigner(prev => !prev)
    }, 3000) // Toggle every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-screen flex items-center justify-end">
      <p className='font-mono text-[white] mb-[460px]'>PRODUCT</p>

      <div className="w-full flex justify-center lg:justify-end">
        <div className="overflow-hidden"> {/* Added this wrapper */}
          <h1 className="text-[128px] lg:text-[350px] tracking-[-0.05em] leading-11 lg:pb-[300px] lg:pr-4 relative">
            {designerText.split('').map((letter, index) => (
              <span key={index} className="relative inline-block">
                <AnimatePresence initial={false}>
                  {isDesigner ? (
                    <motion.span
                      key="designer"
                      initial={{ y: '30%' }}
                      animate={{ y: '0%' }}
                      exit={{ y: '-100%' }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="absolute inset-0 flex items-center justify-center text-[#434343]"
                    >
                      {letter}
                    </motion.span>
                  ) : (
                    <motion.span
                      key="engineer"
                      initial={{ y: '100%' }}
                      animate={{ y: '0%' }}
                      exit={{ y: '-100%' }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="absolute inset-0 flex items-center justify-center text-[#F13C00]"
                    >
                      {engineerText[index] || letter}
                    </motion.span>
                  )}
                </AnimatePresence>
                <span className="invisible">{letter}</span>
              </span>
            ))}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default H1