import Image from 'next/image'
import { Button } from '../ui/button'

export function MnpBanner() {
  return (
    <section className="h-[640px] bg-gradient-to-br from-blue-400 to-blue-900">
      <div className="container flex size-full items-center justify-evenly">
        <div className="relative aspect-square h-full">
          <Image
            quality={100}
            className="object-contain py-12"
            src="/mnp.png"
            fill
            alt="Рекламное изображение переноса номера"
          />
        </div>
        <div className="text-white">
          <h1 className="mb-2 text-6xl font-semibold">
            +30 Гб каждый
            <br />
            месяц
          </h1>
          <p className="mb-8 text-2xl">за перенос номера в ПарусМобайл</p>
          <Button size="xl" variant="secondary">
            Хочу перенести
          </Button>
        </div>
      </div>
    </section>
  )
}
