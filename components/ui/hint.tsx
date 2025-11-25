import { useLinkStatus } from "next/link"
import { Spinner } from "./spinner"

export default function Hint({ className }: { className?: string }) {
  const { pending } = useLinkStatus()

  if (pending) {
    return <Spinner className={className} />
  }

  return null
}