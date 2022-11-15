import Link from 'next/link'
import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {
  BellIcon,
  ClockIcon,
  CogIcon,
  ChartBarIcon,
  MenuAlt1Icon,
  QuestionMarkCircleIcon
} from '@heroicons/react/outline'
import {
  ChevronDownIcon,
  ChevronRightIcon,
  HomeIcon
} from '@heroicons/react/solid'
import {
  SidebarMobile,
  SidebarDesktop
} from '@/components/admin/dashboard/navigation/sidebar'
import { classNames } from '@/utils/helpers'

const navigation = [
  {
    name: 'Dashboard',
    path: '/admin/dashboard',
    icon: ChartBarIcon,
    current: true
  },
  {
    name: 'Tracks',
    path: '/admin/dashboard/tracks',
    icon: ClockIcon,
    current: false
  }
]
const secondaryNavigation = [
  { name: 'Settings', path: '#', icon: CogIcon },
  { name: 'Help', path: '#', icon: QuestionMarkCircleIcon }
]

export default function Layout({ children, title, user, breadcrumbs }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div className="h-screen bg-gray-100">
        <div className="min-h-full">
          <SidebarMobile
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            navigation={navigation}
            secondaryNavigation={secondaryNavigation}
          />

          {/* Static sidebar for desktop */}
          <SidebarDesktop
            navigation={navigation}
            secondaryNavigation={secondaryNavigation}
          />

          <div className="lg:pl-64 flex flex-col flex-1">
            <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none">
              <button
                type="button"
                className="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              {/* Search bar */}
              <div className="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                <div className="flex-1 flex">
                  <nav className="flex" aria-label="Breadcrumb">
                    <ol role="list" className="flex items-center space-x-4">
                      <li>
                        <div>
                          <a
                            href="#"
                            className="text-gray-400 hover:text-gray-500"
                          >
                            <HomeIcon
                              className="flex-shrink-0 h-5 w-5"
                              aria-hidden="true"
                            />
                            <span className="sr-only">Home</span>
                          </a>
                        </div>
                      </li>
                      {breadcrumbs.map((breadcrumb) => (
                        <li key={breadcrumb.name}>
                          <div className="flex items-center">
                            <ChevronRightIcon
                              className="flex-shrink-0 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <Link href={breadcrumb.path}>
                              <a
                                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                aria-current={
                                  breadcrumb.current ? 'page' : undefined
                                }
                              >
                                {breadcrumb.name}
                              </a>
                            </Link>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </nav>
                </div>
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50">
                        <img
                          className="h-8 w-8 rounded-full"
                          src={user.profileImg}
                          alt=""
                        />
                        <span className="hidden ml-3 text-gray-700 text-sm font-medium lg:block">
                          <span className="sr-only">Open user menu for </span>
                          {user.firstName} {user.lastName}
                        </span>
                        <ChevronDownIcon
                          className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Logout
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
            <main className="flex-1 pb-8">
              {/* Page header */}
              <div className="bg-white shadow">
                <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                  <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center">
                        <div>
                          <div className="flex items-center">{title}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {children}
            </main>
          </div>
        </div>
      </div>
    </>
  )
}
