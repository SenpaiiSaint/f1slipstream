import React from 'react'
import { AccountToggle } from './AccountToggle'
import { Navigation } from './Navigation'
import { Subscription } from './Subscription'

export const Sidebar = () => {
  return (
    <div>
        <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]">
            <AccountToggle />
            <Navigation />
        </div>
    </div>
  )
}
