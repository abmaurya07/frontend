import React from 'react'
import logo from '@assets/images/logo.png'
import Image from 'next/image'
import Button from '@components/Button'
import Link from 'next/link'
type Props = {}

const Header = (props: Props) => {
  return (
    <header className="flex items-center justify-between">
      <div>
        <Image src={logo} alt="Logo" className='w-28' />
      </div>
      <nav className="flex space-x-4">
        <Link href="/" className="text-gray-300 hover:text-gray-400 font-medium text-base">
          HOME
        </Link>
        <Link href="/shop" className="text-gray-300 hover:text-gray-400 font-medium text-base">
          SHOP
        </Link>
        <Link href="/blog" className="text-gray-300 hover:text-gray-400 font-medium text-base">
          BLOG
        </Link>
        <Link href="/blog" className="text-gray-300 hover:text-gray-400 font-medium text-base">
          CONTACT
        </Link>
  
      </nav>
      <div className="flex space-x-4">
    <Button>Signup</Button>
    <Button>Login</Button>
      </div>
    </header>
  )
}

export default Header