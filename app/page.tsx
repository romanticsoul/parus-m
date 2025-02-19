import { MainBanner } from '@/components/main-banner'
import { TariffsSection } from '@/components/tariffs-section'

export default function Home() {
  return (
    <main className="grid">
      <MainBanner />
      <TariffsSection />
    </main>
  )
}
