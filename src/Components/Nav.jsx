import React from 'react'

const Nav = () => {
  return (
    <div className='text-[white] flex justify-between mt-8 '>
      <div>
        <h2>FOLARIN ABIOLA</h2>
        <h2>ABOUT</h2>
      </div>

      <div className='flex gap-2'>
        <h2>OPEN TO WORK</h2>
        <p>-</p>
        <h2 className='text-[#F13C00]'> TOMORROW</h2>
      </div>

      <div>
        <h2>CONTACT</h2>
      </div>
    </div>
  )
}

export default Nav
