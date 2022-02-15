import React from 'react'
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi'
import { useState } from 'react'
import DispatchMapTracker from './DispatchMapTracker'
import AssignedOrdersByDrivers from './AssignedOrdersByDrivers'
import NewOrders from './NewOrders'
const Dispatch = () => {

  const dispatchData = [
    "Nathan",
    "Bekele",
    "Abebe"
  ]

  const [mapVisible, setMapVisible] = useState(false)
  const [selectedPage, setSelectedPage] = useState("assignedOrders")

  const onMapTrackerClicked = () => {
    setMapVisible(!mapVisible)
  }

  const onAssignOrderClicked = () => {
    if (!mapVisible) {
      return
    }
    setSelectedPage("assignedOrders")
  }

  const onNewOrdersClicked = () => {
    if (!mapVisible) {
      return
    }
    setSelectedPage("newOrders")
  }

  return (
    <div className='flex flex-col'>

      <div className={`flex items-start  ${mapVisible ? "h-min" : "h-16"}`}>
        {mapVisible ? <DispatchMapTracker /> : <div></div>}
        <div className='flex grow flex-col '>
          <div className='px-3 py-4 flex items-center'>
            <div className='flex items-center space-x-4'>
              <button className='outline outline-1 outline-gray-200 px-2 py-2 rounded-sm' onClick={() => { onMapTrackerClicked() }}>{mapVisible ? <BiLeftArrow className='text-gray-700' /> : <BiRightArrow className='text-gray-700' />}</button>
              <button onClick={() => { onAssignOrderClicked() }}><h4 className={`text-gray-500 text-sm ${selectedPage === "assignedOrders" && mapVisible === true ? "border-b-2 border-b-green-600 pb-2" : ""}`}>Assigned orders by driver</h4></button>
            </div>
            <div className='grow text-center'>
              <button onClick={() => { onNewOrdersClicked() }}><h4 className={`text-gray-500 text-sm ${selectedPage === "newOrders" && mapVisible === true ? "border-b-2 border-b-green-600 pb-2" : ""}`}>New Orders</h4></button>
            </div>
          </div>
          <div className={`${!mapVisible ? "invisible" : "block h-screen"}`}>
            {selectedPage === "assignedOrders" ? <AssignedOrdersByDrivers /> : <NewOrders />}
          </div>
        </div>
      </div>

      <div className='border-b'></div>
      {!mapVisible ? <div className='flex'>
        <div className='grow'>
          <AssignedOrdersByDrivers />
        </div>
        <div className='grow'>
          <NewOrders />
        </div>
      </div> : <div>
      </div>}
    </div>
  )
}

export default Dispatch