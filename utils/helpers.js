export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function formatEpoch(epoch) {
  const date = new Date(epoch)
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
}

export function parseJwt(token) {
  var base64Url = token.split('.')[1]
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      })
      .join('')
  )

  return JSON.parse(jsonPayload)
}

export function verifyJwt(jwt) {
  return (Date.now() >= jwt.exp * 1000) ? null : jwt
}
