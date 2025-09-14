import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

interface LoadingContextType {
  isLoading: boolean
  setPageLoaded: () => void
  setVideosLoaded: () => void
  pageLoaded: boolean
  videosLoaded: boolean
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

interface LoadingProviderProps {
  children: ReactNode
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [pageLoaded, setPageLoadedState] = useState(false)
  const [videosLoaded, setVideosLoadedState] = useState(false)

  const setPageLoaded = useCallback(() => {
    setPageLoadedState(true)
  }, [])

  const setVideosLoaded = useCallback(() => {
    setVideosLoadedState(true)
  }, [])

  const isLoading = !pageLoaded || !videosLoaded

  return (
    <LoadingContext.Provider value={{
      isLoading,
      setPageLoaded,
      setVideosLoaded,
      pageLoaded,
      videosLoaded
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
