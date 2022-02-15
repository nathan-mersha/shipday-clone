import React from 'react'

const AssignedOrdersByDrivers = () => {

    const onCustomerClick = () => {
        console.log("Clicked on customer")
    }
    const orders = [
        {
            "id": "1",
            "date": "Jan 11, 2021",
            "orderNo": "Test-1234",
            "cName": "Chala",
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

    ]

    return (
        <button className='h-screen border-r' onClick={onCustomerClick()}>
            <div className="flex">

                <div className='bg-slate-100 h-screen'>
                    {
                        orders.map((order) => {

                            return <div className='flex'>
                                <div className='bg-green-500 w-1'></div>
                                <div className='bg-white w-60 flex px-3 py-2 space-x-3 items-center'>
                                    <div className='h-8 w-8 bg-slate-600 text-white rounded-full flex justify-center items-center font-bold text-sm'>{order.cName.slice(0, 2).toUpperCase()}</div>
                                    <h4 className='text-sm text-gray-700'>{order.cName}</h4>

                                </div>
                            </div>
                        })
                    }
                </div>

                <div className='bg-white grow'>

                </div>

            </div>


        </button>
    )
}

export default AssignedOrdersByDrivers