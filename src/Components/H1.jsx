import React from 'react'

const H1 = () => {
  return (
    <div className="h-screen flex items-center justify-end">

      <p className='font-mono text-[white] mb-[460px] '>PRODUCT</p>

      <div className=" w-full flex justify-center lg:justify-end"> {/* Added full width and horizontal padding */}

        <h1 className='text-[#434343] text-[128px]  lg:text-[350px] tracking-[-0.05em] leading-11 lg:pb-[300px] lg:pr-4'> 
          DESIGNER
        </h1>

      </div>

    </div>
  )
}

export default H1