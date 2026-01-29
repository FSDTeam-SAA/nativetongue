import React from 'react'
import BettingDashboard from './_components/betting-dashboard'
import BigWinsToday from './_components/big-wins-today'
import Header from './_components/header'
import LiveFeed from './live-feed/_components/live-feed'
import { ChartSpline, Plus } from 'lucide-react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='space-y-10'>
        <BettingDashboard />
        <div className="grid grid-cols-4 gap-8">

          <div className="col-span-3 ">
            <div className="flex mb-8 justify-between items-center">
              <h1 className="flex items-center font-bold gap-2 text-xl">
                <span>
                  <ChartSpline className="h-5 w-5" />
                </span>
                <span>Live Feed</span>
              </h1>

              <Link href={"/live-feed/post-pick"}>
                <button className="flex items-center font-bold gap-2 bg-gradient-to-r from-[#329150] to-[#0d4728] hover:bg-gradient-to-r hover:from-[#0d4728] hover:to-[#329150] py-3 px-4 rounded-3xl">
                  <span>
                    <Plus></Plus>
                  </span>

                  <span>New Pick</span>
                </button>
              </Link>
            </div>
            <LiveFeed />
          </div>
          <div>
            <BigWinsToday />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page