import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Layout from '@/components/admin/dashboard/layout'
import { useRef, useState } from 'react'
import useSWR from 'swr'
import {
  DotsVerticalIcon,
  PlusIcon,
  UserIcon,
  BookOpenIcon,
  PencilIcon,
  TrashIcon
} from '@heroicons/react/outline'
import Button from '@/components/admin/dashboard/elements/button'
import PageHeaderComponent from '@/components/admin/dashboard/elements/pageHeader'
import TableComponent from '@/components/admin/dashboard/elements/table'
import { formatEpoch, classNames } from '@/utils/helpers'

const breadcrumbs = [
  { name: 'Tracks', path: '/admin/dashboard/tracks', current: false }
]

const tableHeaders = [
  { name: 'Track' },
  {
    name: (
      <span className="flex items-center gap-x-1">
        <UserIcon className="-mr-1 h-5 w-5" />
        Users
      </span>
    )
  },
  { name: 'Date Added' }
]

function AddTrackForm() {
  const trackName = useRef()
  const trackLink = useRef()
  const trackDescription = useRef()

  const onSubmit = async () => {
    try {
      await fetch('/api/tracks', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: trackName.current.value,
          link: trackLink.current.value,
          description: trackDescription.current.value
        })
      })
      trackName.current.value = ''
      trackLink.current.value = ''
      trackDescription.current.value = ''
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col mt-2">
          <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg bg-white p-5">
            <form
              className="space-y-8 divide-y divide-gray-200"
              onSubmit={(e) => {
                e.preventDefault()
                onSubmit()
              }}
            >
              <div className="space-y-8 divide-y divide-gray-200">
                <div>
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Add Track
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      This information will be used to create a new track
                    </p>
                  </div>

                  <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="track-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Track name
                      </label>
                      <div className="mt-1">
                        <input
                          ref={trackName}
                          type="text"
                          name="track-name"
                          id="track-name"
                          className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          required
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="track-link"
                        className="block text-sm font-medium text-gray-700"
                        required
                      >
                        Track link
                      </label>
                      <div className="mt-1">
                        <input
                          ref={trackLink}
                          type="text"
                          name="track-link"
                          id="track-link"
                          className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-6">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Description
                      </label>
                      <div className="mt-1">
                        <textarea
                          ref={trackDescription}
                          id="about"
                          name="about"
                          rows={3}
                          className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                          required
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Write some information about the track
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-5">
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default function TracksView() {
  const [isAddingTrack, setIsAddingTrack] = useState(false)
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, error } = useSWR('/api/tracks', fetcher)
  const tracks =
    error != null
      ? []
      : data == null
      ? []
      : data.map((track) => [
          <div key={track.id} className="flex">
            <a
              href={`/admin/dashboard/tracks/${track.slug}`}
              className="group inline-flex space-x-2 truncate text-sm"
            >
              <p className="text-gray-500 truncate group-hover:text-gray-900">
                {track.name}
              </p>
            </a>
          </div>,
          <span key={track.id} className="flex text-gray-500">
            {track.registrations}
          </span>,
          <time
            key={track.id}
            className="text-gray-500"
            dateTime={formatEpoch(1668502165546)}
          >
            {formatEpoch(1668502165546)}
          </time>,
          <Menu
            key={track.id}
            as="div"
            className="relative inline-block text-left"
          >
            <Menu.Button
              type="button"
              className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <DotsVerticalIcon className="h-6 w-6" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'group flex items-center px-4 py-2 text-sm'
                        )}
                      >
                        <PencilIcon
                          className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                        Edit
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'group flex items-center px-4 py-2 text-sm'
                        )}
                      >
                        <TrashIcon
                          className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                        Delete
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        ])
  const user = useRef({
    firstName: 'John',
    lastName: 'Doe',
    profileImg:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  })
  return (
    <Layout
      user={user.current}
      icon={BookOpenIcon}
      pageHeader={
        <PageHeaderComponent icon={BookOpenIcon} title={'Tracks'}>
          <Button
            onClick={() =>
              setIsAddingTrack((_isAddingTrack) => !_isAddingTrack)
            }
          >
            Add Track
            <PlusIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
          </Button>
        </PageHeaderComponent>
      }
      breadcrumbs={breadcrumbs}
    >
      {isAddingTrack && <AddTrackForm />}
      <TableComponent headers={tableHeaders} records={tracks} />
    </Layout>
  )
}
