import type { Metadata } from "next";
import "./globals.css";
import {IBM_Plex_Serif} from "next/font/google"

const ibmPlexSerif = IBM_Plex_Serif({
  subsets : ['latin'],
  weight :['400' , '700'],
  variable: '--font-ibm-plex-serif'
})

export const metadata: Metadata = {
  title: "Horizon Bank",
  description: "Horizon is a modern banking platform for everyone. ",
  icons : {
    icon : '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}