import React from 'react'
import { useState } from 'react'
import DriverList from './DriverList'
import DriverPayment from './DriverPayment'


const Drivers = () => {
  const [selectedPage, setSelectedPage] = useState("driverList")

  return (
    <div className='p-5'>

        <div className='flex space-x-4'>
          <button className={`text-slate-700 px-4 py- border-green-500 ${selectedPage === "driverList" ? "border-b-2" : "border-b-0"}`} onClick={()=>{setSelectedPage("driverList")}}>Driver List</button>
          <button className={`text-slate-700 px-4 py- border-green-500 ${selectedPage === "driverPayment" ? "border-b-2" : "border-b-0"}`} onClick={()=>{setSelectedPage("driverPayment")}}>Daily Payment</button>
        </div>

        
        {
          selectedPage === "driverList" ?
          <DriverList/> :
          <DriverPayment/>
        }
    </div>
  )
}

export default Drivers