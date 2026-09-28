import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: { default: "Nidhogg Works", template: "%s | Nidhogg Works" }, description: "Nidhogg Works is an independent game and software development studio." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}