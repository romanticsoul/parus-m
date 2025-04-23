import type { Metadata } from "next"
import { Rubik as Font } from "next/font/google"
import { Header as DefaultHeader } from "@/widgets/header"
import { Footer as DefaultFooter } from "@/widgets/footer"
import "@/app/globals.css"

const font = Font({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
})

export const metadata: Metadata = {
  title: "",
  description: "",
}

export default function RootLayout({
  children,
  header = <DefaultHeader />,
  footer = <DefaultFooter />,
}: Readonly<{
  children: React.ReactNode
  header?: React.ReactNode
  footer?: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${font.variable} ${font.className} antialiased`}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  )
}
