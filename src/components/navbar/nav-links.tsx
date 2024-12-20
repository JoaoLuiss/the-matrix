'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

export function NavLinks() {
  const pathname = usePathname()
  const operations = pathname === '/'
  const game = pathname === '/game'
  const learn = pathname === '/learn'

  return (
    <ul className="hidden md:flex space-x-8 w-full mr-5 items-center font-medium">
      <li
        className={twMerge(
          'transition hover:text-green dark:hover:text-green',
          operations
            ? 'text-green dark:text-green'
            : 'text-dark-gray dark:text-light-gray',
        )}
      >
        <Link href={'/'}>Operações</Link>
      </li>
      <li
        className={twMerge(
          'transition hover:text-green dark:hover:text-green',
          game
            ? 'text-green dark:text-green'
            : 'text-dark-gray dark:text-light-gray',
        )}
      >
        <Link href={'/game'}>Jogo</Link>
      </li>
      <li
        className={twMerge(
          'transition hover:text-green dark:hover:text-green',
          learn
            ? 'text-green dark:text-green'
            : 'text-dark-gray dark:text-light-gray',
        )}
      >
        <Link href={'/learn'}>Aprenda</Link>
      </li>
    </ul>
  )
}
