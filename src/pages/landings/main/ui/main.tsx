import { TariffsSection } from "@/widgets/tariffs-section"
import { MainBanner } from "./main-banner"
import { TilesSection } from "./tiles-section"

export const MainLanding = () => {
  return (
    <main>
      <MainBanner />
      <TariffsSection />
      <TilesSection />
    </main>
  )
}
