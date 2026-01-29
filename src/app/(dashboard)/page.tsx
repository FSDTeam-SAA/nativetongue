import React from 'react'
import BettingDashboard from './_components/betting-dashboard'
import BigWinsToday from './_components/big-wins-today'

const page = () => {
  return (
    <div>
      <BettingDashboard />
      <div>
        <BigWinsToday />
      </div>
    </div>
  )
}

export default page