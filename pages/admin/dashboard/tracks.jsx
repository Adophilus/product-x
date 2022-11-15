import Layout from '@/components/admin/dashboard/layout'
import { useRef } from 'react'

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
    <Layout user={user} title={'Tracks'} breadcrumbs={breadcrumbs}></Layout>
  )
}
