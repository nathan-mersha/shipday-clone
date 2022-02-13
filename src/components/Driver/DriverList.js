import React from 'react'
import { AiFillCar } from 'react-icons/ai'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useState } from 'react'
import AddDriver from './AddDriver'

const DriverList = () => {

    const onAddNewDriver = () => {
        setShowAddDriverModal(true)
    }

    const [showAddDriverModal, setShowAddDriverModal] = useState(false);
    const driverData = [
        {
            "id": "1",
            "name": "Nathan",
            "phone": "+251967823595",
            "email": "nathanmersha@gmail.com",
            "status": "Off Duty"
        },
        {
            "id": "1",
            "name": "Daniel",
            "phone": "+251967823595",
            "email": "dantheman@gmail.com",
            "status": "Off Duty"
        },
        {
            "id": "1",
            "name": "Biruk",
            "phone": "+251967823595",
            "email": "biruk Chala@gmail.com",
            "status": "Off Duty"
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
                                            Phone
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Email
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Vehicle
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Status
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">

                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">

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
                                                {driver.email}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <AiFillCar className='text-gray-400' />
                                            </td>

                                            <td className="text-sm text-gray-400 font-light px-6 py-4 whitespace-nowrap">
                                                {driver.status}
                                            </td>

                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <button className='bg-slate-200 py-1 rounded-sm text-sm px-12'>End Shift</button>
                                            </td>

                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <button className='bg-slate-200 py-1 rounded-sm text-sm px-8'>Edit</button>
                                            </td>

                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <button className='bg-slate-200 py-1 rounded-sm text-sm px-12'>Reset Password</button>
                                            </td>

                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <button className='bg-slate-200 py-1 rounded-sm text-sm px-8'>View</button>
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

export default DriverList