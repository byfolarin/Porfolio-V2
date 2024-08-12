import React from 'react'

const H1 = () => {
  return (
    <div className="h-screen flex items-center justify-end">
      <p className='font-mono text-[white]'>PRODUCT</p>
      <div className=" w-full flex  justify-end px-4"> {/* Added full width and horizontal padding */}
        <h1 className='text-[#F13C00] text-[350px] tracking-[-0.03em] leading-11'> 
          ENGINEER
        </h1>
      </div>
    </div>
  )
}

export default H1