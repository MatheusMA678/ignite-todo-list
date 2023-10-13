import { Logo } from '@/assets/logo'
import { LoginButton } from './login-button'

export function Header() {
  return (
    <header className="h-[200px] bg-base-gray-700 flex items-center justify-center">
      <Logo />
      <div className="absolute right-8 top-8">
        <LoginButton />
      </div>
    </header>
  )
}
