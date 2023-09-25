import {  PrismaClient } from "@prisma/client"; 

declare global {
    var prisma: PrismaClient | undefined;
};

export const db = globalThis.prisma || new PrismaClient();


//globalThis is not triggered by hot reload during build.
//after build delete globalThis
if(process.env.NODE_ENV !== "production") globalThis.prisma = db
