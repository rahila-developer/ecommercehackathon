import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NAV_LINKS } from '@/utils/links'
import { Input } from '@/components/ui/input'
import {Search} from 'lucide-react'
import {ShoppingCart} from 'lucide-react'
const Header = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
    <div className="flex justify-between py-4 items-center">
      <div> 
      <Link href={'/'}>
            <Image src={'/images/logo.webp'} width={150} height={150} alt="" />
            </Link>
      </div>
      <div>
        <ul className='flex gap-7'>
        {NAV_LINKS.map((links)=>(
            <li className='' key={1}>
                <Link className='font-normal text-base' href={links.href}>
                         {links.name}
                         </Link>
                </li>
                    ))}
           
        </ul>
      </div>
      <div className='flex'>
        <span className='h-8 border flex items-center justify-center w-8 rounded-s-md border-e-0'><Search className='w-[15px]' /></span>
        <Input placeholder="Search Products " className='h-8 border-s-0 rounded-s-none ouline-0' />
      </div>
      <div className='w-11 h-11 bg-slate-200 rounded-full flex justify-center items-center relative'>
        <span className='bg-red-500 h-5 w-5 text-white flex text-xs rounded-full justify-center items-center absolute top-0 right-0'>0</span>
      <ShoppingCart />
      </div>
    </div>
    </div>
  )
}

export default Header

