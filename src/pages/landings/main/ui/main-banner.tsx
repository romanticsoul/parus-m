import Image from "next/image"
import { Button } from "@/shared/ui"

export const MainBanner = () => {
  return (
    <section className="h-[640px] bg-gradient-to-br from-blue-400 to-blue-900">
      <div className="container flex size-full items-center justify-evenly">
        <div className="relative aspect-square h-full max-lg:hidden">
          <Image
            quality={100}
            className="object-contain py-12"
            src="/esim.png"
            fill
            alt="Рекламное изображение подключения к esim"
          />
        </div>
        <div className="text-white">
          <h1 className="mb-2 text-6xl font-semibold">
            Подключай eSIM
            <br />
            за 5 минут
          </h1>
          <p className="mb-8 text-2xl">
            Все та же сим-карта, только без пластика
          </p>
          <Button size="xl" variant="secondary">
            Подключить
          </Button>
        </div>
      </div>
    </section>
  )
}
