import Layout from '@/components/admin/dashboard/layout'
import { useRef } from 'react'
import { PlusIcon } from '@heroicons/react/outline'
import Button from '@/components/admin/dashboard/elements/button'
import PageHeaderComponent from '@/components/admin/dashboard/elements/pageHeader'

const breadcrumbs = [
  { name: 'Tracks', path: '/admin/dashboard/tracks', current: false }
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
      user={user}
      title={
        <PageHeaderComponent title={'Tracks'}>
          <Button>
            Add Track
            <PlusIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
          </Button>
        </PageHeaderComponent>
      }
      breadcrumbs={breadcrumbs}
    ></Layout>
  )
}
