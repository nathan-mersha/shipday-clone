import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useState } from 'react'
import AddNewOrder from './AddNewOrder'
import {VscVerified} from 'react-icons/vsc'
import {GrDocumentText} from 'react-icons/gr'
import {AiFillEdit} from 'react-icons/ai'

const Current = () => {

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
            "orderNo" : "Test-1234",
            "cName" : "Nathan",
            "pickUpFrom" : "Tech",
            "amount" : 323,
            "distance" : 0,
            "placementTime" : "11:44pm",
            "reqPickupTime" : "12:04am",
            "reqDeliveryTime" : "Feb 11, 12:44 am",
            "estDeliveryTime" : "12min",
            "driver" : "Bekele",
            "readyForPickup" : true,
            "status" : "Unassigned",
        },
        {
            "id": "1",
            "orderNo" : "Test-1234",
            "cName" : "Abebe",
            "pickUpFrom" : "Tech",
            "amount" : 323,
            "distance" : 0,
            "placementTime" : "11:44pm",
            "reqPickupTime" : "12:04am",
            "reqDeliveryTime" : "Feb 11, 12:44 am",
            "estDeliveryTime" : "12min",
            "driver" : "Bekele",
            "readyForPickup" : true,
            "status" : "Assigned",
        },
        {
            "id": "1",
            "orderNo" : "Test-1234",
            "cName" : "Chala",
            "pickUpFrom" : "Tech",
            "amount" : 323,
            "distance" : 0,
            "placementTime" : "11:44pm",
            "reqPickupTime" : "12:04am",
            "reqDeliveryTime" : "Feb 11, 12:44 am",
            "estDeliveryTime" : "12min",
            "driver" : "Bekele",
            "readyForPickup" : false,
            "status" : "Unassigned",
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
                <button className='bg-white text-gray-600 px-6 rounded-sm outline outline-1 outline-gray-400 text-sm py-2' onClick={() => { onExcelUpload() }}>+ Excel Upload</button>
                <button className='bg-green-600 text-white px-6 rounded-sm text-sm py-2' onClick={() => { onAddNewDriver() }}>+ New Order</button>


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
                                            <input type="checkbox"/>
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Order No.
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            C. Name
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Pick-up From
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
                                            Req. Pickup Time
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Req. Delivery Time
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Est. Delivery Time
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Driver
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Ready for pick-up
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Status
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {driverData.map((driver) => {

                                        return <tr className="border-b">
                                            <td className="text-sm text-gray-400 font-light px-6 py-4 whitespace-nowrap">
                                                <input type="checkbox"/>
                                            </td>
                                            <td className="text-sm text-gray-400 font-light px-6 py-4 whitespace-nowrap">
                                                {driver.orderNo}
                                            </td>
                                            <td className="text-sm text-gray-400 font-light px-6 py-4 whitespace-nowrap">
                                                {driver.cName}
                                            </td>
                                            <td className="text-sm text-gray-400 font-light px-6 py-4 whitespace-nowrap ">
                                                {driver.pickUpFrom}
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
                                                {driver.reqPickupTime}
                                            </td>

                                            <td className="text-sm text-gray-400 font-light px-6 py-4 whitespace-nowrap">
                                                {driver.reqDeliveryTime}
                                            </td>

                                            <td className="text-sm text-gray-400 font-light px-6 py-4 whitespace-nowrap">
                                                {driver.estDeliveryTime}
                                            </td>

                                            <td className="text-sm text-gray-400 font-light px-6 py-4 whitespace-nowrap">
                                                {driver.driver}
                                            </td>

                                            <td className="text-sm text-gray-400 font-light px-6 py-4 whitespace-nowrap">
                                                <VscVerified className='h-7 w-7'/>
                                            </td>

                                            <td className="text-sm text-gray-400 font-light px-6 py-4 whitespace-nowrap">
                                                <button className='outline w-28 outline-green-300 py-1 outline-2 bg-gray-100 text-gray-800 text-sm'>{driver.status}</button>
                                            </td>

                                            <td className="text-sm text-gray-400 font-light px-6 py-4 whitespace-nowrap">
                                                <button className='outline px-2 py-2 outline-1 outline-gray-200'><GrDocumentText/></button>
                                            </td>
                                            <td className="text-sm text-gray-400 font-light px-6 py-4 whitespace-nowrap">
                                                <button><AiFillEdit className='h-5 w-5'/></button>
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

export default Current