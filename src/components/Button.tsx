import React from 'react'

function Button(props: { textName: string} ) {
  return (
    <>
      <button className='bg-[#3A6D8C] p-[.66rem_3rem_.66rem_3rem] rounded-[.5rem] text-[1rem] hover:bg-[#6A9AB0]'>{props.textName}</button>
    </>
  )
}

export default Button