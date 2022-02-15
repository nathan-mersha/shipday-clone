import React from 'react'
import Order from './Order'

const NewOrders = () => {
    const orders = [
        {
            "id": "1",
            "date": "Jan 11, 2021",
            "orderNo": "Test-1234",
            "cName": "Nathan",
            "pickUp": "Tech",
            "amount": 323,
            "distance": 10.9,
            "placementTime": "11:44pm",
            "startTime": "30 min",
            "pickupTime": "11:45pm",
            "deliveryTime": "12:43am",
            "driver": "Bekele",
            "status": "Unassigned",
          },
          {
            "id": "1",
            "date": "Jan 11, 2021",
            "orderNo": "Test-1234",
            "cName": "Nathan",
            "pickUp": "Tech",
            "amount": 323,
            "distance": 10.9,
            "placementTime": "11:44pm",
            "startTime": "30 min",
            "pickupTime": "11:45pm",
            "deliveryTime": "12:43am",
            "driver": "Bekele",
            "status": "Unassigned",
          },
          {
            "id": "1",
            "date": "Jan 11, 2021",
            "orderNo": "Test-1234",
            "cName": "Nathan",
            "pickUp": "Tech",
            "amount": 323,
            "distance": 10.9,
            "placementTime": "11:44pm",
            "startTime": "30 min",
            "pickupTime": "11:45pm",
            "deliveryTime": "12:43am",
            "driver": "Bekele",
            "status": "Unassigned",
          }
    ]
  return (
    <div className='h-screen p-2 space-y-3'>

        {orders.map((order)=>{
            return <Order order={order}/>
        })}
    </div>
  )
}

export default NewOrders