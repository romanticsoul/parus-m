import { Button } from "@/shared/ui"
import { Globe, Phone, ShieldCheck, Infinity, icons } from "lucide-react"

const tariffs = [
  {
    title: "Для рациональных",
    description: [
      { icons: <Globe />, text: "30 гигабайт интернета" },
      { icons: <Phone />, text: "500 минут и 300 смс" },
      { icons: <ShieldCheck />, text: "Защита от спама и мошенников" },
      { icons: <Infinity />, text: "Неограниченные мессенджеры" },
    ],
    price: 249,
    oldPrice: 349,
  },
  {
    title: "Для продвинутых",
    description: [
      { icons: <Globe />, text: "60 гигабайт интернета" },
      { icons: <Phone />, text: "1500 минут и 800 смс" },
      { icons: <ShieldCheck />, text: "Защита от спама и мошенников" },
      { icons: <Infinity />, text: "Неограниченные мессенджеры" },
    ],
    price: 649,
    oldPrice: 899,
  },
  {
    title: "Для неудержимых",
    description: [
      { icons: <Globe />, text: "120 гигабайт интернета" },
      { icons: <Phone />, text: "Безлимитные смс и звонки" },
      { icons: <ShieldCheck />, text: "Защита от спама и мошенников" },
      { icons: <Infinity />, text: "Неограниченные мессенджеры" },
    ],
    price: 849,
    oldPrice: 1199,
  },
]

export const TariffsSection = () => {
  return (
    <section className="container py-16 max-md:py-10" id="tariffs">
      <h2 className="mb-12 text-4xl font-medium">Тарифы</h2>
      <div className="grid grid-cols-3 gap-10 max-lg:gap-4 max-md:grid-cols-1">
        {tariffs.map((tariff) => (
          <article
            key={tariff.title}
            className="bg-secondary text-secondary-foreground rounded-3xl p-12 max-lg:p-6"
          >
            <h4 className="mb-6 text-2xl font-medium max-lg:text-xl">
              {tariff.title}
            </h4>
            <ul className="text-muted-foreground grid gap-4 text-lg max-lg:text-base [&_svg]:size-6 [&>li]:flex [&>li]:items-center [&>li]:gap-3">
              {tariff.description.map((item, index) => (
                <li key={index}>
                  {item.icons}
                  {item.text}
                </li>
              ))}
            </ul>
            <div className="my-6">
              <p className="text-2xl font-medium">{tariff.price}₽ в месяц</p>
              <span className="text-muted-foreground line-through">
                {tariff.oldPrice}₽ в месяц
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 max-lg:grid-cols-1">
              <Button size="lg" variant="outline">
                Подробнее
              </Button>
              <Button size="lg">Выбрать</Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
