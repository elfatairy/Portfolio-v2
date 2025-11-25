'use client'

import { useEffect, useState } from "react"

export const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true)
    }, 0)
  }, [])

  return isMounted
}