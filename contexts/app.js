import { createContext } from 'react'
import { verifyJwt, parseJwt } from '@/utils/helpers'

// {
//     email: 'test@mail.com',
//     profileImg:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     }

const initializeStateUser = () => {
  const localStorageUser = window.localStorage.getItem('user')

  return {
    data: localStorageUser
      ? verifyJwt(parseJwt(JSON.parse(localStorageUser)))
      : null,
    get email() {
      if (!this.data) return null

      return this.data.email
    },
    get profileImg() {
      if (!this.data) return null

      return this.data.profileImg
    },
    get isLoggedIn() {
      return !!this.data
    },
    login(token) {
      const { user } = verifyJwt(parseJwt(token))
      this.data = user
      console.log(this)
    },
    logout() {
      this.data = null
    }
  }
}

const initializeState = () => {
  return {
    user: initializeStateUser()
  }
}

export const Context = createContext({})

export const Provider = ({ children }) => {
  return (
    <Context.Provider value={initializeState()}>{children}</Context.Provider>
  )
}
