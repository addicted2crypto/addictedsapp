"use client"

import {getProviders, signIn } from 'next-auth/react';

import React, { useState, useEffect} from 'react'

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  siginUrlParams?: Record<string, string> |
  undefined;

}

type Providers = Record<string, Provider>;

const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers | null> (null);
  

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      

      setProviders(res);
    }

    fetchProviders();
  }, []);


  if(providers) {
  return (
    <div>
      {Object.values(providers).map
      ((provider: Provider, i) => (
        <button key={i} onClick={() => signIn(provider?.id)}>{provider.id}</button>

      ))}
    </div>
    
  )
}
}

export default AuthProviders