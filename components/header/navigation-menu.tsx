import Link from 'next/link'

export function NavigationMenu() {
  return (
    <nav className="font-medium">
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
  )
}
