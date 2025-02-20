import { MainBanner } from '@/components/main-banner'
import { TariffsSection } from '@/components/tariffs-section'
import { TilesCardSection } from '@/components/tiles-card-section'

export default function Home() {
  return (
    <main className="grid">
      <MainBanner />
      <TariffsSection />
      <TilesCardSection />
    </main>
  )
}
