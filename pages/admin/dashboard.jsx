import { useRef } from 'react'
import Link from 'next/link'
import Layout from '@/components/admin/dashboard/layout'
import { UserIcon, MapIcon, ChartBarIcon } from '@heroicons/react/outline'
import { classNames } from '@/utils/helpers'
import PageHeaderComponent from '@/components/admin/dashboard/elements/pageHeader'
import useSWR from 'swr'
import TableComponent from '@/components/admin/dashboard/elements/table'
import { formatEpoch } from '@/utils/helpers'

const tableHeaders = [
  { name: 'Operation' },
  { name: 'Status' },
  { name: 'Date' }
]

const statusStyles = {
  success: 'bg-green-100 text-green-800',
  processing: 'bg-yellow-100 text-yellow-800',
  failed: 'bg-gray-100 text-gray-800'
}

const breadcrumbs = [
  { name: 'Dashboard', path: '/admin/dashboard', current: false }
]

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function RecentActivities() {
  const { data, error } = useSWR('/api/recent-activities', fetcher)
  const recentActivities =
    error != null
      ? []
      : data == null
      ? []
      : data.map((recentActivity) => [
          <div key={recentActivity.id} className="flex">
            <a
              href={`/admin/dashboard/recent-activities/${recentActivity.id}`}
              className="group inline-flex space-x-2 truncate text-sm"
            >
              <p className="text-gray-500 truncate group-hover:text-gray-900">
                {recentActivity.operation}
              </p>
            </a>
          </div>,
          <span
            className={classNames(
              statusStyles[recentActivity.status],
              'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize'
            )}
          >
            {recentActivity.status}
          </span>,
          <time
            className="text-gray-500"
            dateTime={formatEpoch(recentActivity.date)}
          >
            {formatEpoch(recentActivity.date)}
          </time>
        ])
  return (
    <>
      <h2 className="max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
        Recent activity
      </h2>

      <TableComponent records={recentActivities} headers={tableHeaders} />
    </>
  )
}

function Card({ card }) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <card.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">
                {card.name}
              </dt>
              <dd>
                <div className="text-lg font-medium text-gray-900">
                  {card.amount}
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-5 py-3">
        <div className="text-sm">
          <Link href={card.href}>
            <a className="font-medium text-cyan-700 hover:text-cyan-900">
              View all
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

function Cards() {
  const { data, error } = useSWR('/api/overview', fetcher)
  console.log(data)
  const cards =
    error != null
      ? []
      : data == null
      ? []
      : data
          .map((stat) => {
            switch (stat.name) {
              case 'registeredUsers':
                return {
                  name: 'Users',
                  href: '/admin/dashboard/users',
                  icon: UserIcon,
                  amount: parseInt(stat.value)
                }
              case 'registeredTracks':
                return {
                  name: 'Tracks',
                  href: '/admin/dashboard/tracks',
                  icon: MapIcon,
                  amount: parseInt(stat.value)
                }
              default:
                return null
            }
          })
          .filter(Boolean)

  return (
    <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <Card card={card} key={card.name} />
      ))}
    </div>
  )
}
export default function DashboardView() {
  const user = useRef({
    firstName: 'John',
    lastName: 'Doe',
    profileImg:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  })

  return (
    <Layout
      icon={ChartBarIcon}
      pageHeader={<PageHeaderComponent title={'Dashboard'} />}
      user={user.current}
      breadcrumbs={breadcrumbs}
    >
      <div className="mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg leading-6 font-medium text-gray-900">
            Overview
          </h2>
          <Cards />
        </div>

        <RecentActivities />
      </div>
    </Layout>
  )
}
