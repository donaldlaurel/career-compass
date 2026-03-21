import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ClientWrapper } from '@/components/client-wrapper'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Career Compass - College Program & Scholarship Finder',
  description: 'Discover the perfect college program, school, and scholarship for your future. Take our career assessment quiz designed for senior high school students in the Philippines.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  )
}
