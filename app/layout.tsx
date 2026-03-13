import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Lora, Outfit } from 'next/font/google'
import './globals.css'

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Yuliia Berkut — Accountant & Bookkeeper for Contractors in Toronto',
  description:
    'Yuliia Berkut helps contractors in Toronto stay organized with invoicing, bookkeeping, and QuickBooks Online support. Based in Ontario.',
  metadataBase: new URL('https://yberkut.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://yberkut.com',
    title: 'Yuliia Berkut — Accountant & Bookkeeper for Contractors',
    description:
      'Professional bookkeeping, invoicing, and QuickBooks Online support for contractors in Toronto, Ontario.',
    siteName: 'Yuliia Berkut',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yuliia Berkut — Accountant & Bookkeeper for Contractors',
    description:
      'Bookkeeping, invoicing, and QuickBooks Online support for contractors in Toronto.',
  },
  keywords: [
    'accountant Toronto',
    'bookkeeper Toronto',
    'contractor bookkeeping',
    'QuickBooks Online',
    'invoicing contractors Ontario',
    'accounts receivable Toronto',
  ],
  authors: [{ name: 'Yuliia Berkut' }],
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lora.variable} ${outfit.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
