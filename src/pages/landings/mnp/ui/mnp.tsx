import { MnpBanner } from "./mnp-banner"
import { TariffsSection } from "@/widgets/tariffs-section"
import { MnpForm } from "@/features/mnp-form"

export const MnpPage = () => {
  return (
    <main>
      <MnpBanner />
      <section className="container pt-16">
        <MnpForm />
      </section>
      <TariffsSection />
    </main>
  )
}
