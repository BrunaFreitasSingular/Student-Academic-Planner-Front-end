"use client";

import { Providers } from "@/src/app/providers";

export default function DashboardLayout({
    children,
}:{
    children: React.ReactNode
}){
    return(
         <div>
            <Providers>
                {children}
            </Providers>
        </div>
    )
}
