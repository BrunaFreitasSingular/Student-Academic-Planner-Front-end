export default function DashboardLayout({
    children,
}:{
    children: React.ReactNode
}){
    return(
        <html lang="en">
            <body className="bg-gray-100">
                {/*Layout*/}
                <main>{children}</main>
            </body>
        </html>
    )
}