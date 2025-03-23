import React from 'react'

const Buttons = ({ bg, href, children, color, onClick}) => {
    const style = {
        backgroundColor: bg,
        color: color,
    }

  return (
    <>
        <a href={href}>
              <button onClick={onClick} className='w-[280px] sm:w-[430px] md:w-[518px] h-[34px] md:h-[42px] font-bold border rounded-[12px] ' style={style} >
                <p className='text-[14px] font-sans font-[500] md:text-[16px] leading-[19.6px] md:leading-[22.4px] tracking-[0.2px] md:tracking-[0.2px] '>{children}</p>
                </button>
        </a>
    </>
  )
}

export default Buttons