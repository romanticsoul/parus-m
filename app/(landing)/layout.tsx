import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Парусмобайл - ваша быстрая связь',
  description: 'Быстрая связь по всей стране',
}

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
