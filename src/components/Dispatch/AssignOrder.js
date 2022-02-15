import React from 'react'
import { useState } from 'react'

const AssignOrder = ({ setShowAssignOrder}) => {

    const onCancel = () => {
        setShowAssignOrder(false)
    }
    

    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none shadow-md rounded-md"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">

                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col justify-between bg-white outline-none focus:outline-none">

                        <div className='w-96 py-7 px-4 space-y-5'>
                            <div className='flex justify-between'>
                                <h1 className='grow  text-center text-xl font-semibold text-gray-700'>Assign Order</h1>
                                <button onClick={() => { setShowAssignOrder(false) }}>close</button>
                            </div>

                            <div className='flex justify-around pt-8'>
                                <div>
                                    <h3>Drivers</h3>
                                    <button className='bg-gray-300 px-9 py-1 rounded-md'>Nathan</button>
                                </div>

                                <div>
                                    <h3># of Assigned Orders</h3>
                                    <h4>0</h4>
                                </div>
                            </div>

                        </div>
                        <div className='bg-slate-100 py-3 flex space-x-2 justify-end px-4 border-t-2 rounded-md items-center'>
                            <button className='border bg-white rounded-md px-6 py-2' onClick={() => { onCancel() }}>Cancel</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default AssignOrder