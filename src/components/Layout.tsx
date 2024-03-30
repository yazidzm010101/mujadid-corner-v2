import Link from "next/link";
import { ReactNode } from "react";
import NightSwitcher from "./NightSwitcher";

interface Props {
  children: ReactNode
}

interface NavLinks {
  name: string
  path: string
}

const navLinks: NavLinks[] = [
  {
    name: 'Blogs',
    path: '/blogs',
  },
  {
    name: 'Projects',
    path: '/projects',
  },
  {
    name: 'Art-gallery',
    path: '/art-gallery',
  },
  {
    name: 'About',
    path: '/about',
  },
]

export default function Layout({ children }: Props) {
  return (
    <div>
      <nav className="w-full h-12 fixed flex items-center px-4">
        <ul className="flex h-full items-center me-auto">
          {
            navLinks.map(item => (
              <li key={item.path} className="px-2">
                <Link href={item.path}>
                  {item.name}
                </Link>
              </li>
            ))
          }
        </ul>
        <NightSwitcher />
      </nav>
      <section className="pt-12">
        {children}
      </section>
    </div>
  )
}