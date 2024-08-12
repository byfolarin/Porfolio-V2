import React from 'react'

const Nav = () => {
  return (
    <div className='text-[white] flex justify-between mt-8 '>
      <div>
        <h2 className='font-mono'>FOLARIN ABIOLA</h2>
        <h2 className='font-mono text-[#F13C00]'>ABOUT</h2>
      </div>

      <div className='flex gap-2'>
        <h2 className='font-mono'>OPEN TO WORK</h2>
        <p>-</p>
        <h2 className='text-[#F13C00] font-mono'> TOMORROW</h2>
      </div>

      <div>
        <h2 className='font-mono'>CONTACT</h2>
      </div>
    </div>
  )
}

export default Nav
