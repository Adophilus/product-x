import Link from 'next/link'
import Image from 'next/image'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { classNames } from '@/utils/helpers'
import { useRouter } from 'next/router'
import ProductXLogoImg from '@/assets/product-x-logo.png'

export function SidebarMobile({
  sidebarOpen,
  setSidebarOpen,
  navigation,
  secondaryNavigation
}) {
  return (
    <Transition.Root show={sidebarOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 flex z-40 lg:hidden"
        onClose={setSidebarOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-primary-700">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  type="button"
                  className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="sr-only">Close sidebar</span>
                  <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 flex items-center px-4">
              <Image
                className="h-8 w-auto"
                src={ProductXLogoImg}
                alt="Product-X logo"
              />
            </div>
            <nav
              className="mt-5 flex-shrink-0 h-full divide-y divide-primary-800 overflow-y-auto"
              aria-label="Sidebar"
            >
              <div className="px-2 space-y-1">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.path}>
                    <a
                      className={classNames(
                        item.current
                          ? 'bg-primary-800 text-white'
                          : 'text-primary-100 hover:text-white hover:bg-primary-600',
                        'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      <item.icon
                        className="mr-4 flex-shrink-0 h-6 w-6 text-primary-200"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
              <div className="mt-6 pt-6">
                <div className="px-2 space-y-1">
                  {secondaryNavigation.map((item) => (
                    <Link key={item.name} href={item.path}>
                      <a className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-primary-100 hover:text-white hover:bg-primary-600">
                        <item.icon
                          className="mr-4 h-6 w-6 text-primary-200"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </Transition.Child>
        <div className="flex-shrink-0 w-14" aria-hidden="true">
          {/* Dummy element to force sidebar to shrink to fit close icon */}
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export function SidebarDesktop({ navigation, secondaryNavigation }) {
  const router = useRouter()
  const isCurrentRoute = (route) => router.route === route

  return (
    <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex flex-col flex-grow bg-primary-700 pt-5 pb-4 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          <Image
            className="h-8 w-auto"
            src={ProductXLogoImg}
            alt="Product-X logo"
          />
        </div>
        <nav
          className="mt-5 flex-1 flex flex-col divide-y divide-primary-800 overflow-y-auto"
          aria-label="Sidebar"
        >
          <div className="px-2 space-y-1">
            {navigation.map((item) => {
              const _isCurrentRoute = isCurrentRoute(item.path)
              return (
                <Link key={item.name} href={item.path}>
                  <a
                    className={classNames(
                      _isCurrentRoute
                        ? 'bg-primary-800 text-white'
                        : 'text-primary-100 hover:text-white hover:bg-primary-600',
                      'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
                    )}
                    aria-current={isCurrentRoute ? 'page' : null}
                  >
                    <item.icon
                      className="mr-4 flex-shrink-0 h-6 w-6 text-primary-200"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                </Link>
              )
            })}
          </div>
          <div className="mt-6 pt-6">
            <div className="px-2 space-y-1">
              {secondaryNavigation.map((item) => {
                const _isCurrentRoute = isCurrentRoute(item.path)
                return (
                  <Link key={item.name} href={item.path}>
                    <a
                      className={classNames(
                        _isCurrentRoute
                          ? 'bg-primary-800 text-white'
                          : 'text-primary-100 hover:text-white hover:bg-primary-600',
                        'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
                      )}
                    >
                      <item.icon
                        className="mr-4 h-6 w-6 text-primary-200"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </Link>
                )
              })}
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
