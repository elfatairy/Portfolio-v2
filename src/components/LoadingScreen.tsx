import { useLoading } from "@/contexts/LoadingContext"

export default function LoadingScreen() {
  const { isLoading } = useLoading()

  if (!isLoading) {
    return null
  }

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="text-foreground text-xl">
        Loading...
      </div>
    </div>
  )
}
