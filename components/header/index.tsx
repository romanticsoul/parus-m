import { NavigationMenu } from './navigation-menu'

export function Header() {
  return (
    <header className="border-b">
      <div className="container flex items-center justify-between py-6">
        <div className="text-2xl font-medium">Парус-М</div>
        <NavigationMenu />
      </div>
    </header>
  )
}
