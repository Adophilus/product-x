import { createContext, useState } from 'react'
import { verifyJwt, parseJwt } from '@/utils/helpers'

// {
//     email: 'test@mail.com',
//     profileImg:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     }

export const Context = createContext({})

export const Provider = ({ children }) => {
  function initializeState() {
    return {
      user: initializeStateUser()
    }
  }

  const [state, setState] = useState(initializeState())

  function initializeStateUser() {
    const localStorageUser =
      typeof window === 'undefined' ? null : window.localStorage.getItem('user')

    return {
      data:
        localStorageUser != null
          ? verifyJwt(parseJwt(localStorageUser)).user
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
        window.localStorage.setItem('user', token)
        setState((state) => ({
          ...state,
          user: { ...state.user, data: verifyJwt(parseJwt(token)).user }
        }))
      },
      logout() {
        this.data = null
      }
    }
  }

  return <Context.Provider value={state}>{children}</Context.Provider>
}
