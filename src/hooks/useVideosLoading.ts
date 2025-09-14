import { useLoading } from "@/contexts/LoadingContext"
import { useState } from "react"
import { useEffect } from "react"
import { otherProjects } from "@/data/otherProjects"

export const useVideosLoading = () => {
  const { setVideosLoaded } = useLoading()
  const [loadedVideos, setLoadedVideos] = useState(new Set<number>())
  const uniqueVideos = Array.from(new Set(otherProjects.map(p => p.video)))

  const handleVideoLoad = (videoSrc: string) => {
    const videoIndex = uniqueVideos.indexOf(videoSrc)
    if (videoIndex !== -1) {
      setLoadedVideos(prev => {
        const newSet = new Set(prev)
        newSet.add(videoIndex)
        return newSet
      })
    }
  }

  useEffect(() => {
    if (loadedVideos.size === uniqueVideos.length && uniqueVideos.length > 0) {
      setVideosLoaded()
    }
  }, [loadedVideos, uniqueVideos.length, setVideosLoaded])

  return { handleVideoLoad }
}