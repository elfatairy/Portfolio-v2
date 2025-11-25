'use client'

import { useIsMounted } from '@/hooks/useIsMounted'
import { useTheme } from 'next-themes'
import { Prism as SyntaxHighlighterBase } from 'react-syntax-highlighter'
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function SyntaxHighlighter({ children, language }: { children: string, language: string }) {
  const { resolvedTheme } = useTheme()
  const isMounted = useIsMounted()

  if (!isMounted) return null

  return (
    <SyntaxHighlighterBase
      style={resolvedTheme === 'dark' ? oneDark : oneLight}
      language={language}
      customStyle={{
        margin: 0,
        background: 'transparent !important',
        fontSize: '0.875rem'
      }}
      PreTag={({ children, ...props }) => (
        <pre {...props} className="bg-transparent! p-4">
          {children}
        </pre>
      )}
      CodeTag={({ children, ...props }) => (
        <code {...props} className="bg-transparent!">
          {children}
        </code>
      )}
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighterBase>
  )
}