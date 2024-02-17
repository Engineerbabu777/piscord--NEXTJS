import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { cn } from '@/lib/utils'
import { ModalProvider } from '@/components/providers/modal-provider'
const inter = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Discord Clone',
  description: 'Building Discord Clone'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={
        cn(inter.className,
        "bg-white dark:bg-[#313131]"
        )}>
        <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
        storageKey="piscord-theme"
        >

          <ClerkProvider>
          <ModalProvider />

            {children}

          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
