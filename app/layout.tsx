import { Figtree, Geist_Mono, Lora } from "next/font/google"

import "./globals.css"
import { SiteHeader } from "@/components/marketing/header/site-header"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { cn } from "@/lib/utils"

const figtree = Figtree({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-figtree",
  display: "swap",
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        "font-sans",
        figtree.variable,
        lora.variable,
        fontMono.variable
      )}
    >
      <body>
        <ThemeProvider defaultTheme="light">
          <SiteHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
