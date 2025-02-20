import Link from 'next/link'

export function NavigationMenu() {
  return (
    <nav className="font-medium">
      <ul className="flex gap-8">
        <li>
          <Link href="#tariffs">Тарифы</Link>
        </li>
        <li>
          <Link href="#">Новости</Link>
        </li>
        <li>
          <Link href="#">Перенести номер</Link>
        </li>
        <li>
          <Link href="#">О компании</Link>
        </li>
      </ul>
    </nav>
  )
}
