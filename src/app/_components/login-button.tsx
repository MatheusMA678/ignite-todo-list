"use client"

import { SignInButton, UserButton } from '@clerk/clerk-react'
import { Authenticated, Unauthenticated, useConvexAuth } from 'convex/react'
import { Skeleton } from './skeleton'

export function LoginButton() {
  const { isLoading } = useConvexAuth()

  if (isLoading) {
    return <Skeleton className="w-8 h-8 rounded-full" />
  }

  return (
    <>
      <Authenticated>
        <UserButton
          afterSignOutUrl='/'
        />
      </Authenticated>
      <Unauthenticated>
        <SignInButton
          mode='modal'
        >
          <button className="px-4 py-2 text-sm bg-base-gray-400 rounded-lg hover:bg-base-gray-500 transition-colors">
            Entrar
          </button>
        </SignInButton>
      </Unauthenticated>
    </>
  )
}
