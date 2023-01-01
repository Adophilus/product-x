import { createContext, useState } from 'react'

const Context = createContext({})

const Provider = ({ children }) => {
  const [state, setState] = useState(initializeState())

  function initializeState() {
    return {
      theme: 'auto',
      setTheme (theme) {
        switch (theme) {
          case Themes.DARK:
            setState((state) => ({ ...state, theme: Themes.DARK }))
        }
      }
    }
  }

  return <Context.Provider value={state}>{children}</Context.Provider>
}

const Themes = {
  AUTO: 'auto',
  DARK: 'dark',
  LIGHT: 'light'
}

export { Context, Provider, Themes }
