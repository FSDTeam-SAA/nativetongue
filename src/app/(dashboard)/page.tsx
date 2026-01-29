import React from 'react'
import BettingDashboard from './_components/betting-dashboard'
import BigWinsToday from './_components/big-wins-today'
import Header from './_components/header'
import LiveFeed from './live-feed/_components/live-feed'

const page = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <BettingDashboard />
      <div className="grid grid-cols-3 gap-4">

        <div className="col-span-2">
          <LiveFeed />
        </div>
        <div>
          <BigWinsToday />
        </div>
      </div>
    </div>
  )
}

export default page