"use client";

import * as z from "zod";
import { zodResolver } from "@hookForm/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";


const formSchema = z.object({
    name: z.string().min(1, {
        message: "Server image is required by addicteds law"
    }),
    imageUrl: z.string().min(1, {
        message: "Server image is required by fed law"
    })
});



export const InitialModal = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name:"",
            imageUrl: "",
        }
    });
    return (
        <Dialog open>
            <DialogContent className="bg-white text-black p-0 overflow-hidden">
              <DialogHeader className="pt-8 px-6">
                <DialogTitle className="text-2xl text-center text-bold">
                    Create and cusomize your server as much as possile.
                    Log in with gmail,twitter or your fav web3 wallet
                </DialogTitle>
                <DialogDescription className="bg-sky-50 text-i text-center">
                    Name your server and Add an image.
                </DialogDescription>
              </DialogHeader>

            </DialogContent>
        </Dialog>
         
        
    )
}
