import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NavLinks } from '@/constance'
import AuthProviders from './AuthProviders'

const navbar = () => {
  const session = {};//null with let us have auth providers link


  return (
    <nav className='flex-between navbar'>
      <div className='flex-1 flexStart gap-10'>
        <Link href="/">
          <Image 
          src ="/rug.png" 
          width={115}
          height={43}
          alt="Crypto Markets"
          />
          </Link>
          <ul className='xl:flex hidden text-small gap-7'>
            {NavLinks.map((link) => (
              <Link href={link.href} key={link.key}>
                {link.text}
              </Link>
            ))}
          </ul>
        
      </div>
      <div className='flex-end gap-12'>
        {session ? (
          <>
          UserWallet
          
          <Link href="/create-project">
          <p>Share New Software</p>
          <p>Wallet Connect</p>
          </Link>
          
          </>
         
          
          
        )  : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default navbar