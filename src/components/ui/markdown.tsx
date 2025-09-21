import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useTheme } from "@/contexts/ThemeContext"

export default function Markdown({ children }: { children: string }) {
  const { isDarkMode } = useTheme()

  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold mb-8 mt-12 first:mt-0 text-foreground border-b border-border pb-4">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-bold mb-6 mt-10 text-foreground border-l-4 border-primary pl-4">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-semibold mb-4 mt-8 text-foreground">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xl font-semibold mb-3 mt-6 text-primary">
              {children}
            </h4>
          ),
          h5: ({ children }) => (
            <h5 className="text-lg font-medium mb-3 mt-4 text-foreground">
              {children}
            </h5>
          ),
          h6: ({ children }) => (
            <h6 className="text-base font-medium mb-2 mt-3 text-foreground/80 uppercase tracking-wide">
              {children}
            </h6>
          ),
          p: ({ children }) => (
            <p className="text-base leading-7 mb-6 text-foreground/90">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="space-y-2 mb-6 ml-4">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="space-y-2 mb-6 ml-4 list-decimal list-outside">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-base leading-7 text-foreground/90 relative pl-2">
              <span className="absolute -left-2 top-2 w-1.5 h-1.5 bg-primary rounded-full"></span>
              {children}
            </li>
          ),
          a: ({ children, href }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 underline decoration-primary/30 underline-offset-4 hover:decoration-primary/60 transition-colors duration-200 font-medium"
            >
              {children}
            </a>
          ),
          img: ({ src, alt }) => (
            <div className="my-8 rounded-lg overflow-hidden shadow-lg border border-border">
              <img
                src={src}
                alt={alt}
                className="w-full h-auto"
              />
            </div>
          ),
          code: ({ children, className }) => {
            const match = /language-(\w+)/.exec(className || '')
            const language = match ? match[1] : ''

            if (language) {
              return (
                <div className="my-6 rounded-lg overflow-hidden border border-border shadow-sm">
                  <div className="bg-nav/10 px-4 py-2 border-b border-border">
                    <span className="text-sm font-medium text-foreground/70 uppercase tracking-wide">
                      {language}
                    </span>
                  </div>
                  <SyntaxHighlighter
                    style={isDarkMode ? oneDark : oneLight}
                    language={language}
                    customStyle={{
                      margin: 0,
                      background: 'transparent !important',
                      fontSize: '0.875rem'
                    }}
                    PreTag={({ children, ...props }) => (
                      <pre {...props} style={{ background: 'transparent !important', padding: '1.5rem' }}>
                        {children}
                      </pre>
                    )}
                    CodeTag={({ children, ...props }) => (
                      <code {...props} style={{ background: 'transparent !important' }}>
                        {children}
                      </code>
                    )}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                </div>
              )
            }

            return (
              <code className="text-primary px-2 py-1 rounded-md text-sm font-mono border border-border">
                {children}
              </code>
            )
          },
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary bg-primary/5 pl-6 py-4 my-6 italic text-foreground/90 rounded-r-lg">
              {children}
            </blockquote>
          ),
          hr: () => (
            <hr className="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          ),
          table: ({ children }) => (
            <div className="my-8 overflow-x-auto rounded-lg border border-border shadow-sm">
              <table className="w-full">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-nav/10 border-b border-border">
              {children}
            </thead>
          ),
          tbody: ({ children }) => (
            <tbody className="divide-y divide-border">
              {children}
            </tbody>
          ),
          th: ({ children }) => (
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground uppercase tracking-wider">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-6 py-4 text-sm text-foreground/90">
              {children}
            </td>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-primary">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic text-foreground/80">
              {children}
            </em>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}
