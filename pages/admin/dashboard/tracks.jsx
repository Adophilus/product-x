import Layout from '@/components/admin/dashboard/layout'
import { useRef, useState } from 'react'
import useSWR from 'swr'
import { PlusIcon, UserIcon, BookOpenIcon } from '@heroicons/react/outline'
import Button from '@/components/admin/dashboard/elements/button'
import PageHeaderComponent from '@/components/admin/dashboard/elements/pageHeader'
import TableComponent from '@/components/admin/dashboard/elements/table'
import { formatEpoch } from '@/utils/helpers'

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
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col mt-2">
          <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
            <form className="space-y-8 divide-y divide-gray-200">
              <div className="space-y-8 divide-y divide-gray-200">
                <div>
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Profile
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      This information will be displayed publicly so be careful
                      what you share.
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
                          type="text"
                          name="track-name"
                          id="track-name"
                          className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="track-link"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Track link
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="track-link"
                          id="track-link"
                          autoComplete="family-name"
                          className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                          id="about"
                          name="about"
                          rows={3}
                          className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border border-gray-300 rounded-md"
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
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
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
            /*
            <a
              href={`/admin/dashboard/tracks/${track.slug}`}
              className="group inline-flex space-x-2 truncate text-sm"
            >
              <p className="text-gray-500 truncate group-hover:text-gray-900">
                {track.name}
              </p>
            </a>
            */j
          </div>,
          <span className="flex text-gray-500">{track.registrations}</span>,
          <time className="text-gray-500" dateTime={formatEpoch(1668502165546)}>
            {formatEpoch(1668502165546)}
          </time>
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
