import Overview from '@/models/Overview'

export async function up (next) {
  await Overview.createMany([
    {
      name: 'registeredUsers',
      value: 10
    },
    {
      name: 'registeredTracks',
      value: 10
    }
  ])
  next()
}

export async function down (next) {
  await Overview.deleteMany()
	next()
}
