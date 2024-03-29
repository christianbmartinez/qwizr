import Link from 'next/link'
import { cn } from '@/lib'
import { type LayoutProps } from '@/types'

import { buttonVariants } from '@/components/ui/button'
import { Announcement } from '@/components/announcement'
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header'

export default function QwizzesLayout({ children }: LayoutProps) {
  return (
    <>
      <PageHeader>
        <Announcement />
        <PageHeaderHeading className='hidden md:block'>
          Browse through all Qwizzes
        </PageHeaderHeading>
        <PageHeaderHeading className='md:hidden'>
          Browse all Qwizzes
        </PageHeaderHeading>
        <PageHeaderDescription>
          Qwizzes on modern web development languages, frameworks, and more
        </PageHeaderDescription>
        <PageActions>
          <Link
            href='/login'
            className={cn(buttonVariants())}>
            Login
          </Link>
          <Link
            href='/signup'
            className={cn(buttonVariants({ variant: 'outline' }))}>
            Signup
          </Link>
        </PageActions>
      </PageHeader>
      <section>
        <div className='overflow-hidden rounded-[0.5rem] bg-background'>
          {children}
        </div>
      </section>
    </>
  )
}
