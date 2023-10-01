import React from 'react'

type Props = {
    children: React.ReactNode
}

const Button = ({children, ...props}: Props) => {
  return (
    <button 
    className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-white text-black hover:bg-gray-700 hover:text-white w-full"
    {...props}
    >
        <span>{children}</span>
    </button>
  )
}

export default Button