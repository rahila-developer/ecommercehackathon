import React from 'react'
import Image from 'next/image'
import {Facebook} from "lucide-react"
import {Twitter} from "lucide-react"
import {Linkedin} from "lucide-react"
const Footer = () => {
  return (
  <footer className=''>
     <div className="w-full max-w-7xl mx-auto py-20">
        <div className='flex flex-row justify-between'>
            <div className='flex flex-col gap-6 w-[35%] pr-10'>
                <Image src={"/images/logo.webp"} width={180} height={30} alt="" />
                <p className='text-[#666] font-normal text-base'>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
                <ul className='flex gap-4'>
                    <li><a href="" className='bg-[#f1f1f1] w-10 h-10 justify-center flex items-center rounded-lg'><Facebook /></a></li>
                    <li><a href="" className='bg-[#f1f1f1] w-10 h-10 justify-center flex items-center rounded-lg'> <Twitter /></a></li>
                    <li><a href="" className='bg-[#f1f1f1] w-10 h-10 justify-center flex items-center rounded-lg'><Linkedin /></a></li>
                </ul>
            </div>
            <div className='flex flex-col gap-y-6'>
                <h2 className='text-[#666] text-2xl font-bold'>Company</h2>
                <ul className='flex flex-col gap-3'>
                    <li><a href="" className='text-[#666] text-base'>About</a></li>
                    <li><a href="" className='text-[#666] text-base'>Terms of Use</a></li>
                    <li><a href="" className='text-[#666] text-base'>Privacy Policy</a></li>
                    <li><a href="" className='text-[#666] text-base'>How it Works</a></li>
                    <li><a href="" className='text-[#666] text-base'>Contact Us</a></li>
                </ul>
            </div>
            <div className='flex flex-col gap-y-6'>
                <h2 className='text-[#666] text-2xl font-bold'>Support</h2>
                <ul className='flex flex-col gap-3'>
                    <li><a href="" className='text-[#666] text-base'>Support Carrer</a></li>
                    <li><a href="" className='text-[#666] text-base'>24h Service</a></li>
                    <li><a href="" className='text-[#666] text-base'>Quick Chat</a></li>
                </ul>
            </div>
            <div className='flex flex-col gap-y-6'>
                <h2 className='text-[#666] text-2xl font-bold'>Contact</h2>
                <ul className='flex flex-col gap-3'>
                    <li><a href="" className='text-[#666] text-base'>Whatsapp</a></li>
                    <li><a href="" className='text-[#666] text-base'>Support 24h</a></li>
                   
                </ul>
            </div>
           
        </div>
     </div>
      <div className='border-t border-black'>
     <div className="w-full max-w-7xl mx-auto py-4 ">
     <div className='flex justify-between  '>
        <p className='text-base'>Copyright © 2022 Dine Market</p>
        <p className='text-base'>Design by. <strong> Weird Design Studio</strong></p>
        <p className='text-base'>Code by. <strong>shabrina12 on github</strong></p>
        </div>
        </div>
     </div>
  </footer>

  )
}

export default Footer
