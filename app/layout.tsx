import { Rubik as Font } from 'next/font/google'
import './globals.css'

const font = Font({
  variable: '--font-sans',
  subsets: ['latin', 'cyrillic'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={`${font.variable} ${font.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
