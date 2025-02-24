import { NavigationMenu } from './navigation-menu'
import Link from 'next/link'

export function Header() {
  return (
    <header className="border-b">
      <div className="container flex items-center justify-between py-6">
        <Link href="/" className="text-2xl font-semibold">
          парусмобайл.
        </Link>
        <NavigationMenu />
      </div>
    </header>
  )
}
