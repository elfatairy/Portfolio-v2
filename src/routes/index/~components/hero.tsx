import { useSections } from "../~hooks/useSections";
import Overlay from "./Overlay";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const { updateSection } = useSections()
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) return
    updateSection('hero', ref.current.offsetTop, ref.current.offsetTop + ref.current.offsetHeight)
  }, [])

  return (
    <div className="relative flex flex-col justify-center items-center h-screen" ref={ref}>
      <Overlay />
      <div className="max-w-260 z-elevated">
        <h1 className="text-7xl font-bold text-primary leading-[1.1]">Hi, I'm Omar Hassan.</h1>
        <p className="text-primary/80 font-bold text-7xl leading-[1.1]">An Eager Frontend Developer.</p>
        <p className="text-primary text-xl mt-8 text-balance">
          I am a frontend engineer with some backend experience, passionate about creating high-notch applications. I focus on making apps performant, accessible, responsive, and highly user-friendly. I care deeply about my work and always put in the extra effort, constantly aspiring to improve and be a better version of myself.
        </p>
        <div className="mt-8 flex gap-4">
          <Button variant="outline" size="lg">Say Hi</Button>
          <Button variant="outline" size="lg">Download Resume</Button>
        </div>
      </div>
    </div>
  )
}