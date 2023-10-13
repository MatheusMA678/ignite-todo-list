"use client"

import { SignInButton, UserButton } from '@clerk/clerk-react'
import { Authenticated, Unauthenticated } from 'convex/react'

export function LoginButton() {
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
