import Link from "next/link"

export const Header = () => {
  return (
    <header className="bg-background sticky top-0 z-50 border-b">
      <div className="container flex items-center justify-between py-6">
        <Link
          href="/"
          className="text-2xl font-semibold transition-all max-md:text-xl"
        >
          парусмобайл.
        </Link>
        <nav className="font-medium max-md:hidden">
          <ul className="flex gap-8">
            <li>
              <Link href="/#tariffs">Тарифы</Link>
            </li>
            <li>
              <Link href="/news">Новости</Link>
            </li>
            <li>
              <Link href="/mnp">Перенести номер</Link>
            </li>
            <li>
              <Link href="/about">О компании</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
