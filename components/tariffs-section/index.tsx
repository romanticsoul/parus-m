import { Button } from '../ui/button'
import { Globe, Phone, ShieldCheck, Infinity } from 'lucide-react'

export function TariffsSection() {
  return (
    <section className="container py-16" id="tariffs">
      <h2 className="mb-12 text-4xl font-medium">Тарифы</h2>
      <div className="grid grid-cols-3 gap-10">
        <article className="rounded-3xl bg-secondary p-12 text-secondary-foreground">
          <h4 className="mb-6 text-2xl font-medium">Для рациональных</h4>
          <ul className="grid gap-4 text-lg text-muted-foreground [&>li]:flex [&>li]:items-center [&>li]:gap-3 [&_svg]:size-6">
            <li>
              <Globe />
              30 гигабайт интернета
            </li>
            <li>
              <Phone />
              500 минут и 300 смс
            </li>
            <li>
              <ShieldCheck />
              Защита от спама и мошенников
            </li>
            <li>
              <Infinity />
              Неограниченные мессенджеры
            </li>
          </ul>
          <div className="my-6">
            <p className="text-2xl font-medium">249₽ в месяц</p>
            <span className="text-muted-foreground line-through">
              349₽ в месяц
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button size="lg" variant="outline">
              Подробнее
            </Button>
            <Button size="lg">Выбрать</Button>
          </div>
        </article>

        <article className="rounded-3xl bg-secondary p-12 text-secondary-foreground">
          <h4 className="mb-6 text-2xl font-medium">Для продвинутых</h4>
          <ul className="grid gap-4 text-lg text-muted-foreground [&>li]:flex [&>li]:items-center [&>li]:gap-3 [&_svg]:size-6">
            <li>
              <Globe />
              60 гигабайт интернета
            </li>
            <li>
              <Phone />
              1500 минут и 800 смс
            </li>
            <li>
              <ShieldCheck />
              Защита от спама и мошенников
            </li>
            <li>
              <Infinity />
              Неограниченные мессенджеры
            </li>
          </ul>
          <div className="my-6">
            <p className="text-2xl font-medium">649₽ в месяц</p>
            <span className="text-muted-foreground line-through">
              899₽ в месяц
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button size="lg" variant="outline">
              Подробнее
            </Button>
            <Button size="lg">Выбрать</Button>
          </div>
        </article>

        <article className="rounded-3xl bg-secondary p-12 text-secondary-foreground">
          <h4 className="mb-6 text-2xl font-medium">Для неудержимых</h4>
          <ul className="grid gap-4 text-lg text-muted-foreground [&>li]:flex [&>li]:items-center [&>li]:gap-3 [&_svg]:size-6">
            <li>
              <Globe />
              120 гигабайт интернета
            </li>
            <li>
              <Phone />
              Безлимитные смс и звонки
            </li>
            <li>
              <ShieldCheck />
              Защита от спама и мошенников
            </li>
            <li>
              <Infinity />
              Неограниченные мессенджеры
            </li>
          </ul>
          <div className="my-6">
            <p className="text-2xl font-medium">849₽ в месяц</p>
            <span className="text-muted-foreground line-through">
              1199₽ в месяц
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button size="lg" variant="outline">
              Подробнее
            </Button>
            <Button size="lg">Выбрать</Button>
          </div>
        </article>
      </div>
    </section>
  )
}
