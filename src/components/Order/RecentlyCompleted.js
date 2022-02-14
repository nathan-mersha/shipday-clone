import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useState } from 'react'
import AddNewOrder from './AddNewOrder'
import {VscVerified} from 'react-icons/vsc'
import {GrDocumentText} from 'react-icons/gr'
import {AiFillEdit} from 'react-icons/ai'

const RecentlyCompleted = () => {

    const onAddNewDriver = () => {
        setShowAddDriverModal(true)
    }

    const onExcelUpload = () => {
        console.log("Excel upload")
    }

    const [showAddDriverModal, setShowAddDriverModal] = useState(false);
    const driverData = [
        {
            "id": "1",
            "date" : "Jan 11, 2021",
            "orderNo" : "Test-1234",
            "cName" : "Nathan",
            "pickUp" : "Tech",
            "amount" : 323,
            "distance" : 10.9,
            "placementTime" : "11:44pm",
            "startTime" : "30 min",
            "pickupTime" : "11:45pm",
            "deliveryTime" : "12:43am",
            "driver" : "Bekele",
            "feedback" : "it's good",
        },
        {
          "id": "1",
          "date" : "Jan 11, 2021",
          "orderNo" : "Test-1234",
          "cName" : "Nathan",
          "pickUp" : "Tech",
          "amount" : 323,
          "distance" : 10,
          "placementTime" : "11:44pm",
          "startTime" : "30 min",
          "pickupTime" : "11:45pm",
          "deliveryTime" : "12:43am",
          "driver" : "Bekele",
          "feedback" : "it's good",
        },
        {
          "id": "1",
          "date" : "Jan 11, 2021",
          "orderNo" : "Test-1234",
          "cName" : "Nathan",
          "pickUp" : "Tech",
          "amount" : 323,
          "distance" : 12,
          "placementTime" : "11:44pm",
          "startTime" : "30 min",
          "pickupTime" : "11:45pm",
          "deliveryTime" : "12:43am",
          "driver" : "Bekele",
          "feedback" : "it's good",
        }
    ]
    return (
        <div className='mt-8 relative'>
            {showAddDriverModal ? (
                <AddNewOrder setShowAddDriverModal={setShowAddDriverModal}/>
            ) : null}
            <div className='flex justify-between'>
                <div className='border flex justify-center items-center px-3'>
                    <BiSearchAlt2 className='text-gray-400' />
                    <input type="text" placeholder='Search' className='px-3 py-1 focus:outline-none' />
                </div>

                <div className='space-x-3'>
               

                </div>
            </div>

            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="border-b">
                                    <tr>
                                      
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Date
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                           Order No.
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            C.Name
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Pick-up
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Amount
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Distance
                                        </th>
                                        
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Placement Time
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Start Time
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Pickup Time
                                        </th>
                                        
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Delivery Time
                                        </th>
                                        
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Driver
                                        </th>

                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Feedback
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {driverData.map((driver) => {

                                        return <tr className="border-b">
                                            
                                            <td className="text-sm text-gray-400 font-light px-6 py-4 whitespace-nowrap">
                                                {driver.date}
                                            </td>
                                            <td className="text-sm text-gray-400 font-light px-6 py-4 whitespace-nowrap">
                                                {driver.orderNo}
                                            </td>
                                            <td className="text-sm text-gray-400 font-light px-6 py-4 whitespace-nowrap ">
                                                {driver.cName}
                                            </td>
                                            
                                            <td className="text-sm text-gray-400 font-light px-6 py-4 whitespace-nowrap">
                                                {driver.pickUp}
                                            </td>

                                            <td className="text-sm text-gray-400 font-light px-6 py-4 whitespace-nowrap">
                                                {driver.amount}
                                            </td>

                                            <td className="text-sm text-gray-400 font-light px-6 py-4 whitespace-nowrap">
                                                {driver.distance}
                                            </td>

                              
                                            <td className="text-sm text-gray-400 font-light px-6 py-4 whitespace-nowrap">
                                                {driver.placementTime}
                                            </td>

                                            <td className="text-sm text-gray-400 font-light px-6 py-4 whitespace-nowrap">
                                                {driver.startTime}
                                            </td>

                                            <td className="text-sm text-gray-400 font-light px-6 py-4 whitespace-nowrap">
                                                {driver.pickupTime}
                                            </td>

                                            <td className="text-sm text-gray-400 font-light px-6 py-4 whitespace-nowrap">
                                                {driver.deliveryTime}
                                            </td>

                                            <td className="text-sm text-gray-400 font-light px-6 py-4 whitespace-nowrap">
                                                {driver.driver}
                                            </td>

                                            <td className="text-sm text-gray-400 font-light px-6 py-4 whitespace-nowrap">
                                                {driver.feedback}
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

export default RecentlyCompleted