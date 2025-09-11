import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "file:text-background placeholder:text-background/80 dark:file:text-foreground dark:placeholder:text-foreground/80 selection:bg-primary-background selection:text-primary flex  w-full min-w-0 border-b-2 border-background dark:border-primary bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none field-sizing-content file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
