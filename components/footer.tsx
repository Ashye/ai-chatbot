import React from 'react'

import { cn } from '@/lib/utils'

export function FooterText({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <div
      className={cn(
        'px-2 text-center text-xs leading-normal text-muted-foreground bg-muted/60',
        className
      )}
      {...props}
    >
      Ai can response false info.
    </div>
    // <p
    //   className={cn(
    //     'px-2 text-center text-xs leading-normal text-muted-foreground',
    //     className
    //   )}
    //   {...props}
    // >
    //   Open source AI chatbot built with{' '}
    //   <ExternalLink href="https://nextjs.org">Next.js</ExternalLink> and{' '}
    //   <ExternalLink href="https://github.com/vercel/ai">
    //     Vercel AI SDK
    //   </ExternalLink>
    //   .
    // </p>
  )
}
