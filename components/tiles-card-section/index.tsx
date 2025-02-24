import Image from 'next/image'
import { Button } from '../ui/button'

export function TilesCardSection() {
  return (
    <>
      <section className="container mb-16">
        <div className="rounded-3xl bg-secondary py-16 text-center">
          <h2 className="mb-12 text-4xl font-medium">Связь по всей стране</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Где бы вы ни были: в городе или за его пределами — связь ловит
            везде. Мы используем более 280 тысяч вышек по России и работаем на
            сетях двух мобильных операторов, чтобы вы оставались на связи в
            разных уголках страны
          </p>
          <Button size="lg" className="my-8">
            Оформить сим-карту
          </Button>
          <div className="relative h-80">
            <Image
              quality={100}
              src="/russia.png"
              alt="Карта покрытия сети"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>
      <section className="container mb-16 grid h-[540px] grid-cols-2 gap-10">
        <article className="flex flex-col rounded-3xl bg-secondary p-12 pb-0 text-center">
          <h3 className="text-3xl font-medium">Переходите на Парус-М</h3>
          <p className="mx-auto mt-3 max-w-md text-lg text-muted-foreground">
            со своим номером и получайте
            <br />
            30 Гб каждый месяц
          </p>
          <Button className="mx-auto mt-3" size="lg">
            Перенести номер
          </Button>
          <div className="relative mt-16 flex-1">
            <Image
              src="/mnp.png"
              quality={100}
              alt="Изображение телефона"
              fill
              className="object-contain"
            />
          </div>
        </article>
        <article className="flex flex-col rounded-3xl bg-gradient-to-br from-blue-400 to-blue-900 p-12 pb-0 text-center text-white">
          <h3 className="text-3xl font-medium">eSIM онлайн за 5 минут</h3>
          <p className="mx-auto mt-4 max-w-md text-lg">
            Оформите заявку и получите цифровую
            <br />
            сим-карту не выходя из дома
          </p>
          <Button
            variant="secondary"
            className="mx-auto mt-3 font-medium"
            size="lg"
          >
            Оформить eSIM
          </Button>
          <div className="relative mt-16 flex-1">
            <Image
              src="/e_desktop.png"
              alt="Изображение блокнота"
              fill
              quality={100}
              className="object-contain"
            />
          </div>
        </article>
      </section>
      <section className="container">
        <div className="flex items-center justify-evenly rounded-3xl bg-secondary py-12">
          <div>
            <h2 className="text-4xl font-medium">
              Оставайтесь на связи
              <br />в поездках за границу
            </h2>
            <p className="mt-2 text-lg">с роумингом более чем в 180 странах</p>
          </div>
          <div className="relative size-[500px]">
            <Image
              quality={100}
              src="/rouming_desktop.png"
              className="object-contain"
              alt="Изображение планеты"
              fill
            />
          </div>
        </div>
      </section>
    </>
  )
}
