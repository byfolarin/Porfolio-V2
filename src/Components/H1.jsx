import React from 'react'

const H1 = () => {
  return (
    <div className="h-screen flex items-end justify-center overflow-hidden">
      <div className="mb-8 w-full px-4"> {/* Added full width and horizontal padding */}
        <h1 className='text-[#F13C00] text-[15vw] 
        sm:text-[20vw] md:text-[25vw] lg:text-[280px] 
        tracking-[-0.12em] leading-[0.8] text-center
        break-words'> {/* Added text-center and break-words */}
          ENGINEER
        </h1>
      </div>
    </div>
  )
}

export default H1