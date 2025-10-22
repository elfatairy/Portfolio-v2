import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

interface LoadingContextType {
  isLoading: boolean
  setPageLoaded: () => void
  pageLoaded: boolean
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

interface LoadingProviderProps {
  children: ReactNode
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [pageLoaded, setPageLoadedState] = useState(false)

  const setPageLoaded = useCallback(() => {
    setPageLoadedState(true)
  }, [])

  const isLoading = !pageLoaded

  return (
    <LoadingContext.Provider value={{
      isLoading,
      setPageLoaded,
      pageLoaded
    }}>
      {children}
    </LoadingContext.Provider>
  )
}

export function useLoading() {
  const context = useContext(LoadingContext)
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider')
  }
  return context
}
