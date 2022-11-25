export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function formatEpoch(epoch) {
  const date = new Date(epoch)
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
}
