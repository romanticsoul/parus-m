import Image from "next/image"
import { Button } from "@/shared/ui"

export const TilesSection = () => {
  return (
    <>
      <section className="container mb-16 max-md:mb-10">
        <div className="bg-secondary rounded-3xl px-6 py-16 text-center">
          <h2 className="mb-12 text-4xl font-medium max-md:mb-4 max-md:text-3xl">
            Связь по всей стране
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg max-md:max-w-max">
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
      <section className="container mb-16 grid h-[540px] grid-cols-2 gap-10 max-md:mb-10 max-md:h-auto max-md:grid-cols-1">
        <article className="bg-secondary flex flex-col rounded-3xl p-12 pb-0 text-center">
          <h3 className="text-3xl font-medium">Переходите на ПарусМобайл</h3>
          <p className="text-muted-foreground mx-auto mt-3 max-w-md text-lg">
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
        <div className="bg-secondary flex items-center justify-evenly rounded-3xl px-6 py-12 max-md:flex-col">
          <div>
            <h2 className="text-4xl font-medium max-md:text-2xl">
              Оставайтесь на связи
              <br className="max-lg:hidden" />в поездках за границу
            </h2>
            <p className="mt-2 text-lg">с роумингом более чем в 180 странах</p>
          </div>
          <div className="relative size-[500px] max-md:mt-10 max-md:size-[300px]">
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
