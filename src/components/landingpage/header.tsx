import React from 'react'
import logo from '@assets/images/logo.png'
import Image from 'next/image'
type Props = {}

const header = (props: Props) => {
  return (
    <header className="flex items-center justify-between py-4 px-6 bg-gray-100">
      <div className="flex items-center">
        <Image src={logo} alt="Logo" className="w-24 h-24 mr-2" />
      </div>
      <div className="flex space-x-4">
        <button className="button">Sign Up</button>
        <button className="button">Login</button>
      </div>
    </header>
  )
}

export default header