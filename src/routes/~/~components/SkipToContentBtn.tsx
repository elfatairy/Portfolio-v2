import { Button } from "@/components/ui/button";

export default function SkipToContentBtn() {
  return (
    <Button
      variant="outline"
      size="lg"
      className="absolute top-1 left-1 z-overlay opacity-0 pointer-events-none focus:opacity-100 focus:pointer-events-auto"
      asChild
    >
      <a href="#hero">
        Skip to content
      </a>
    </Button>
  )
}