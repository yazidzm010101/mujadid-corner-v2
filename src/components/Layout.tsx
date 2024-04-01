import Link from "next/link";
import navButton from "@/assets/nav-button.svg"
import Eclipse from "@/assets/eclipse"
import { ReactNode } from "react";

interface Props {
  children: ReactNode,
  style?: React.CSSProperties
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
    <>
      <nav className="w-full max-w-screen-xl h-12 fixed z-[999] top-12 left-0 flex items-center px-10">
        <button className="ms-auto">
          <img src={navButton.src} className="w-10 relative aspect-square object-contain hover:brightness-200"/>
        </button>
        <Eclipse className={"pointer-events-none fixed top-0 z-[-1] right-0 translate-x-1/2 -translate-y-1/2  w-[150vw] md:w-[185vw] opacity-10"}/>
        {/* <ul className="flex h-full items-center me-auto">
          {
            navLinks.map(item => (
              <li key={item.path} className="px-2">
                <Link href={item.path}>
                  {item.name}
                </Link>
              </li>
            ))
          }
        </ul> */}
      </nav>
      {children}
    </>
  )
}