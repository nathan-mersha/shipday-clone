import React from 'react'
import { useState } from 'react'
import Current from './Current'
import Scheduled from './Scheduled'
import RecentlyCompleted from './RecentlyCompleted'
import Incomplete from './Incomplete'
import History from './History'


const Orders = () => {
  const [selectedPage, setSelectedPage] = useState("current")
  const returnPage = () => {
    switch(selectedPage){
      case "current":
        return <Current/>
      case "scheduled":
        return <Scheduled/>
      case "recentlyCompleted":
        return <RecentlyCompleted/>
      case "incomplete":
        return <Incomplete/>
      case "history":
        return <History/>   
    }
  }
  return (
    <div className='p-5'>

        <div className='flex space-x-4'>
          <button className={`text-slate-700 px-4 py- border-green-500 ${selectedPage === "current" ? "border-b-2" : "border-b-0"}`} onClick={()=>{setSelectedPage("current")}}>Current</button>
          <button className={`text-slate-700 px-4 py- border-green-500 ${selectedPage === "scheduled" ? "border-b-2" : "border-b-0"}`} onClick={()=>{setSelectedPage("scheduled")}}>Scheduled</button>
          <button className={`text-slate-700 px-4 py- border-green-500 ${selectedPage === "recentlyCompleted" ? "border-b-2" : "border-b-0"}`} onClick={()=>{setSelectedPage("recentlyCompleted")}}>Recently Completed</button>
          <button className={`text-slate-700 px-4 py- border-green-500 ${selectedPage === "incomplete" ? "border-b-2" : "border-b-0"}`} onClick={()=>{setSelectedPage("incomplete")}}>Incomplete/Failed</button>
          <button className={`text-slate-700 px-4 py- border-green-500 ${selectedPage === "history" ? "border-b-2" : "border-b-0"}`} onClick={()=>{setSelectedPage("history")}}>History</button>
        </div>
        {
          returnPage()
        }
    </div>
  )
}

export default Orders