import Link from "next/link"

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-16 border-t py-8 text-lg">
      <div className="container">
        <div className="text-muted-foreground">
          <p>Служба поддержки:</p>
          <p>
            <Link className="text-foreground" href="tel:+79000000000">
              +7 800 000-00-00
            </Link>{" "}
            — бесплатно по всей России
          </p>
          <p>
            <Link className="text-foreground" href="mailto:support@parusm.com">
              support@parusmobile.ru
            </Link>
          </p>
        </div>
        <nav className="text-muted-foreground my-8 grid grid-cols-3 gap-8 max-md:grid-cols-1">
          <div className="grid gap-1">
            <p className="text-foreground font-medium">Связь</p>
            <Link href="/#tariffs">Тарифы</Link>
            <Link href="/esim">eSIM</Link>
            <Link href="/pay">Оплата</Link>
          </div>
          <div className="grid gap-1">
            <p className="text-foreground font-medium">Поддержка</p>
            <Link href="/about">Вопросы и ответы</Link>
            <Link href="/esim">Настроить интернет</Link>
            <Link href="/esim">Форма обратной связи</Link>
          </div>
          <div className="grid gap-1">
            <p className="text-foreground font-medium">Компания</p>
            <Link href="/about">О компании</Link>
            <Link href="/esim">Новости и акции</Link>
            <Link href="/esim">Документы</Link>
          </div>
        </nav>
        <div className="text-base font-medium">
          © ПарусМобайл, 2020 — {currentYear}
        </div>
      </div>
    </footer>
  )
}
