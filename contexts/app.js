import { createContext } from 'react'

export const AppContext = createContext({})

export const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{ user: null }}>
    {children}
    </AppContext.Provider>
}
