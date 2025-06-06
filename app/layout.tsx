import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TechyRecruit - Empowering Your Next IT Opportunity",
  description:
    "Job consultancy for today's digital talent. We specialize in IT job placement and career consultancy, connecting top talent with leading companies.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.jpg" sizes="192x192" type="image/jpeg" />
        <link rel="shortcut icon" href="/shortcut_icon.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.jpg" type="image/jpeg" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
