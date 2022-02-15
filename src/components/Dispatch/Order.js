import React from 'react'
import { MdOutlineTripOrigin } from 'react-icons/md'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { AiOutlineLine } from 'react-icons/ai'
import { useState } from 'react'
import AssignOrder from './AssignOrder'

const Order = ({ order }) => {
    const onOrderDetailClicked = () => {
        console.log("Opeining ")
    }
    const [showAssignOrder, setShowAssignOrder] = useState(false)
    return (
        <div className='grow border flex flex-col '>
            {showAssignOrder ? (
                <AssignOrder setShowAssignOrder={setShowAssignOrder} />
            ) : null}

            <div className='flex justify-between border-b py-3 px-3'>
                <button className='text-sm border-b border-dashed border-green-500 text-green-500' onClick={onOrderDetailClicked()}>{order.orderNo}</button>
                <div className='flex space-x-3'>
                    <h3><span className='font-bold'>$</span>{order.amount}</h3>
                    <button className='bg-green-500 text-white px-5 py-1 text-sm rounded-sm shadow-sm' onClick={()=>{setShowAssignOrder(true)}}>+ Assign</button>
                </div>
            </div>

            <div className='flex py-2 px-3'>
                <div className='flex flex-col space-y-1'>
                    <MdOutlineTripOrigin className='text-gray-400' />
                    <AiOutlineLine className='rotate-90 text-gray-400' />
                    <FaMapMarkerAlt className='text-gray-500' />
                </div>

                <div className='grow px-3'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h4 className='text-sm'>{order.pickUp}</h4>
                            <h4 className='text-sm text-gray-500'>Addis Ababa Ethiopia</h4>
                        </div>

                        <h4 className='text-sm text-gray-800'>
                            {order.date}
                        </h4>
                    </div>

                    <div className='flex items-center justify-between pt-2'>
                        <div>
                            <h4 className='text-sm'>{order.cName}</h4>
                            <h4 className='text-sm text-gray-500'>Cherkos</h4>
                        </div>

                        <h4 className='text-sm text-gray-800'>
                            {order.date}
                        </h4>
                    </div>

                </div>

                <div>

                </div>
            </div>

        </div>
    )
}

export default Order