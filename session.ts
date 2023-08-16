import { getServerSession } from 'next-auth';

import { NextAuthOptions, User } from 'next-auth';

import { AdapterUser } from 'next-auth/adapters';

import GoogleProvider from 'next-auth/providers/google';

import jsonwebtoken from 'jsonwebtoken';

import { JWT } from 'next-auth/jwt';

export const authOptions: NextAuthOptions = {
    providers: [
    GoogleProvider({
        clientId: '',
        clentSecret: ''
    })
],
jwt: {
    encode ({ secret, token }) => {

    },
    decode: async ({ secret, token }) => {

    }
},
theme: {
    colorScheme: 'dark',
    logo: '/logo.png'
},
callbacks: {
    async sessionStorage({ session }) {

    },
    async signIn({ user }) {
        
    }
},
}
