import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, BellIcon, XMarkIcon } from '@heroicons/react/outline'
import { classNames } from '@/utils/helpers'
import Link from 'next/link'

// - home
// - category
//   - data
//   - management
//   - design
//   - product
// - faqs

const navigation = [
  { name: 'Home', path: '/', current: true },
  { name: 'Category', path: '/category', current: false },
  { name: 'FAQs', path: '/faqs', current: false }
]

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <>
                      <span className="sr-only">Open main menu</span>
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    </>
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start py-1">
                <div className="flex flex-shrink-0 items-center">
                  <h2
                    className="text-3xl"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  >
                    <Link href="/">
                      <a>ProductX</a>
                    </Link>
                  </h2>
                </div>
                <div className="hidden sm:ml-auto sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.path}>
                        <a
                          className={classNames(
                            item.current
                              ? 'bg-black text-white'
                              : 'hover:bg-gray-200',
                            'px-3 py-2 rounded-md text-xl font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
