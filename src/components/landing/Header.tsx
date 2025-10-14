import { SignInButton, SignUpButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

function Header() {
  return (
    <div className='fixed top-0 right-0 left-0 z-50 px-6 py-2 border-b border-border/50 bg-background/80 backdrop-blur-md h-16 '>
      <nav className='max-w-6xl mx-auto flex items-center justify-between'>
<Link href='/' className='flex items-center gap-2'>
<Image src='/logo.png' alt='Logo' width={32} height={32}  className='w-12' />
<span className='text-lg font-semibold'>Dentist</span>
</Link>
<div className='hidden md:flex items-center gap-10'>
      <a href="#" className='text-muted-foreground hover:text-foreground '>How it works</a>
      <a href="#" className='text-muted-foreground hover:text-foreground '>Pricing</a>
      <a href="#" className='text-muted-foreground hover:text-foreground '>About</a>

</div>

<div>
      <SignInButton mode='modal'>
      <Button variant={'ghost' } size={'sm'}>Login </Button>
</SignInButton>
<SignUpButton mode='modal'>
      <Button size={'sm'}>Sign Up</Button>
</SignUpButton>


</div>
      </nav>
    </div>
  )
}

export default Header
