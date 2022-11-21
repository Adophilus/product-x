export async function up (next) {
  await Overview.createMany([
    {
      name: 'registeredUsers',
      value: 10
    },
    {
      name: 'registeredTracks',
      name: 10
    }
  ])
  next()
}

export async function down (next) {
  await Overview.deleteMany()
	next()
}
