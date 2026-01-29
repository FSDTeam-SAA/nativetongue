import React from 'react'
import BettingDashboard from './_components/betting-dashboard'
import BigWinsToday from './_components/big-wins-today'
import Header from './_components/header'

const page = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <BettingDashboard />
      <div>
        <BigWinsToday />
      </div>
    </div>
  )
}

export default page