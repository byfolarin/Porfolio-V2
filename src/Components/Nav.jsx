import React from 'react'

const Nav = () => {
  return (
    <div className='text-[white] flex justify-between mt-8 '>
      <div>
        <h2 className='font-mono'>FOLARIN ABIOLA</h2>
        <h2 className='font-mono text-[#F13C00] cursor-pointer'>ABOUT</h2>
      </div>

      <div className=' lg:flex-row '>

      <div className='md:flex-row lg:flex-row lg:gap-2'>

            <h2 className='font-mono'>OPEN TO WORK</h2>
            <p className='hidden lg:block'>-</p>
            <h2 className='text-[#F13C00] font-mono'> TOMORROW</h2>
      </div>

      <div>
        <h2 className='font-mono cursor-pointer'>CONTACT</h2>
      </div>

      </div>
    </div>
  )
}

export default Nav
