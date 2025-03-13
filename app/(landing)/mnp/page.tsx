import { MnpBanner } from '@/components/mnp-banner'
import { MnpForm } from '@/components/mnp-form'

export default function Mnp() {
  return (
    <main className="grid">
      <MnpBanner />
      <section className="container mt-16">
        <MnpForm />
      </section>
    </main>
  )
}
