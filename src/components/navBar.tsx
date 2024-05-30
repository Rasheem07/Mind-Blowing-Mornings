import { cn } from '@/lib/utils'
import { Raleway } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Facebook, Linkedin, Menu, Search, SearchIcon, Twitter } from 'lucide-react'

const raleway = Raleway({weight: '700', subsets: ['latin']});
export default function NavBar() {


  return (
    <div className='backdrop-blur-sm min-h-[70px] opacity-95 absolute top-0 inset-x-0 z-10 border-b border-zinc-200 max-w-[100vw] overflow-hidden' style={{background: "rgba(255, 255, 255, 0.7"}}>
        <MaxWidthWrapper className='flex items-center justify-between'>
        <Image src="/assets/logo.png" alt="logo" height={75} width={100} objectFit='contain'/>
        <ul className='hidden md:flex items-center space-x-5 list-none text-gray-900'>
           <Link href='/about' className={cn('text-[16px] leading-[20px]', raleway.className)}>About Us</Link>
           <Link href='/courses' className={cn('text-[16px] leading-[20px]', raleway.className)}>Courses</Link>
           <Link href='/Community' className={cn('text-[16px] leading-[20px]', raleway.className)}>Community</Link>
           <Link href='/contact' className={cn('text-[16px] leading-[20px]', raleway.className)}>Contact Us</Link>
        </ul>
        <div className="hidden md:flex items-center gap-5">
            <div className="p-2.5 bg-white rounded-full shadow-inner">
                <Facebook className='h-4 w-4 text-[#3C3C3C] fill-[#3C3C3C]' />
            </div>
            <div className="p-2.5 bg-white rounded-full shadow-inner">
                <Twitter className='h-4 w-4 text-[#3C3C3C] fill-[#3C3C3C]' />
            </div>
            <div className="p-2.5 bg-white rounded-full shadow-inner">
                <Linkedin className='h-4 w-4 text-[#3C3C3C] fill-[#3C3C3C]' />
            </div>
            <div className="ml-3">
                <Image src='/assets/search.png' alt="search" height={24} width={24} className='object-contain h-6 w-6 stroke-2 text-[#3C3C3C]' />
            </div>
        </div>
        <button className='hidden md:block bg-[#F47D31] hover:bg-orange-400/90 transition-colors text-white py-1.5 md:py-2.5 px-5 rounded-lg shadow-md uppercase'>Log in</button>
        <Menu className='text-[#F47D31] scale-150 mr-2 md:hidden' />
        </MaxWidthWrapper>
    </div>
  )
}
