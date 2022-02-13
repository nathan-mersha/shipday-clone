import React from 'react'
import { AiFillCar } from 'react-icons/ai'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useState } from 'react'
import AddDriver from './AddDriver'

const DriverPayment = () => {

    const onAddNewDriver = () => {
        setShowAddDriverModal(true)
    }

    const [showAddDriverModal, setShowAddDriverModal] = useState(false);
    const driverData = [
        {
            "id": "1",
            "name": "Nathan",
            "phone": "+251967823595",
            "noOfCompletedDeliveries" : 1,
            "baseDriverPay" : "N/A",
            "onlineTips" : "N/A",
            "feesTips" : "N/A",
            "adjustements" : 12,
            "paymentDue" : 45
        },
        {
          "id": "2",
          "name": "Abebe",
          "phone": "+251967823595",
          "noOfCompletedDeliveries" : 1,
          "baseDriverPay" : "N/A",
          "onlineTips" : "N/A",
          "feesTips" : "N/A",
          "adjustements" : 12,
          "paymentDue" : 45
        },
        {
          "id": "3",
          "name": "Daniel",
          "phone": "+251967823595",
          "noOfCompletedDeliveries" : 1,
          "baseDriverPay" : "N/A",
          "onlineTips" : "N/A",
          "feesTips" : "N/A",
          "adjustements" : 12,
          "paymentDue" : 45
        }
    ]
    return (
        <div className='mt-8 relative'>
            {showAddDriverModal ? (
                <AddDriver setShowAddDriverModal={setShowAddDriverModal}/>
            ) : null}
            <div className='flex justify-between'>
                <div className='border flex justify-center items-center px-3'>
                    <BiSearchAlt2 className='text-gray-400' />
                    <input type="text" placeholder='Search' className='px-3 py-1 focus:outline-none' />
                </div>
                <button className='bg-green-600 text-white px-6 rounded-sm' onClick={() => { onAddNewDriver() }}>+ New Driver</button>
            </div>

            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="border-b">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Name
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Phone Number
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                          # Of Completed Deliveries
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                          Base Driver Pay
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Online Tips
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Fees + Tips
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Adjustments
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Payment Due
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {driverData.map((driver) => {

                                        return <tr className="border-b">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                <div className='flex space-x-3'>
                                                    <div className='bg-slate-500 text-white h-8 w-8 rounded-full flex justify-center items-center font-bold text-xs'><h3>{driver.name.slice(0, 2).toUpperCase()}</h3></div>
                                                    <h1 className='text-gray-400 text-sm'>{driver.name}</h1>
                                                </div>
                                            </td>
                                            <td className="text-sm text-gray-400 font-light px-6 py-4 whitespace-nowrap">
                                                {driver.phone}
                                            </td>
                                            <td className="text-sm text-gray-400 font-light px-6 py-4 whitespace-nowrap ">
                                                {driver.noOfCompletedDeliveries}
                                            </td>
                                            
                                            <td className="text-sm text-gray-400 font-light px-6 py-4 whitespace-nowrap">
                                                {driver.baseDriverPay}
                                            </td>

                                            <td className="text-sm text-gray-400 font-light px-6 py-4 whitespace-nowrap">
                                                {driver.onlineTips}
                                            </td>

                                            <td className="text-sm text-gray-400 font-light px-6 py-4 whitespace-nowrap">
                                                {driver.feesTips}
                                            </td>

                                            <td className="text-sm text-gray-400 font-light px-6 py-4 whitespace-nowrap">
                                              <input className='border focus:outline-none w-24' value={driver.adjustements}/>
                                            </td>

                                            <td className="text-sm text-gray-400 font-light px-6 py-4 whitespace-nowrap">
                                                {driver.paymentDue}
                                            </td>
                                            
                                        </tr>
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default DriverPayment