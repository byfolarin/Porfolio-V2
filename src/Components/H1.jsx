import React from 'react'

const H1 = () => {
  return (
    <div className="h-screen flex items-center justify-end">
      <p className='font-mono text-[white] mb-[444px]'>PRODUCT</p>
      <div className=" w-full flex  justify-end"> {/* Added full width and horizontal padding */}
        <h1 className='text-[#F13C00] text-[350px] tracking-[-0.05em] leading-11 pb-64 pr-4'> 
          DESIGNER
        </h1>
      </div>
    </div>
  )
}

export default H1