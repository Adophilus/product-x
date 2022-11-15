import Layout from '@/components/admin/dashboard/layout'
import { useRef } from 'react'
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
const tracks = [
  [
    <div className="flex">
      <a
        href={'/admin/dashboard/tracks/data-science'}
        className="group inline-flex space-x-2 truncate text-sm"
      >
        <p className="text-gray-500 truncate group-hover:text-gray-900">
          Data Science
        </p>
      </a>
    </div>,
    <span className="flex text-gray-500">10</span>,
    <time className="text-gray-500" dateTime={formatEpoch(1668502165546)}>
      {formatEpoch(1668502165546)}
    </time>
  ]
]

export default function TracksView() {
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
          <Button>
            Add Track
            <PlusIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
          </Button>
        </PageHeaderComponent>
      }
      breadcrumbs={breadcrumbs}
    >
      <TableComponent headers={tableHeaders} records={tracks} />
    </Layout>
  )
}
