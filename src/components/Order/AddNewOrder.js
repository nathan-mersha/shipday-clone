import React from 'react'
import { useState } from 'react'
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'

const AddNewOrder = ({setShowAddDriverModal}) => {

    const onSave = () => {
        setErrorMessage("")

        if (name === "") {setErrorMessage("Please enter name")}
        if (phoneNumber === "") {setErrorMessage("Please enter phone number")}
        if (phoneNumber.length !== 9){setErrorMessage("Phonenumber lenght must be 9")}
        if (email === "") {setErrorMessage("Please enter email")}
        if (temporaryPassword === "") {setErrorMessage("Please enter temporary password")}
        
        if (errorMessage !== ""){
            return
        }
        // Save to firebase
        clearFields()
    }

    const clearFields = () => {
        setName("")
        setPhoneNumber("")
        setEmail("")
        setTemporaryPassword("")
        setNote("")
    }
    const onCancel = () => {
        clearFields()
        setErrorMessage("")
        setShowAddDriverModal(false)
    }
    const [errorMessage, setErrorMessage] = useState("")
    const [name, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [temporaryPassword, setTemporaryPassword] = useState("")
    const [note, setNote] = useState("")
    const [passwordVisible, setPasswordVisible] = useState(false)

  return (
    <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none shadow-md rounded-md"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">

                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col justify-between bg-white outline-none focus:outline-none">

                                <div className='px-12 py-14 space-y-5'>
                                    <div className='flex pb-6'>
                                        <h1 className='grow  text-center text-xl font-semibold text-gray-700'> Add a new driver</h1>
                                        <button onClick={() => { setShowAddDriverModal(false) }}>x</button>
                                    </div>

                                    <div className='flex justify-end'>
                                        <h3 className='text-sm text-gray-800'>Name: <span className='text-red-600 pr-5'>*</span></h3>
                                        <input className='border shadow-sm w-96 rounded-sm focus:outline-gray-200' value={name} onChange={(e) => { setName(e.target.value) }} />
                                    </div>

                                    <div className='flex justify-end'>
                                        <h3 className='text-sm text-gray-800'>Phone No: <span className='text-red-600 pr-5'>*</span></h3>
                                        <div className='border flex px-1 shadow-sm w-96'>
                                            <h3 className='bg-gray-200 text-sm text-gray-500 items-center mr-2 my-1'>+251</h3>
                                            <input className='border-none rounded-sm placeholder:text-xs focus:outline-none' value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} placeholder='Mobile phone - we will send SMS' />
                                        </div>
                                    </div>

                                    <div className='flex justify-end'>
                                        <h3 className='text-sm text-gray-800'>Email: <span className='text-red-600 pr-5'>*</span></h3>
                                        <input className='border shadow-sm w-96 rounded-sm focus:outline-gray-200' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                    </div>

                                    <div className='flex justify-end'>
                                        <h3 className='text-sm text-gray-800'>Temporary password: <span className='text-red-600 pr-5'>*</span></h3>
                                        <div className='border w-96 flex pr-3'>
                                            <input className='focus:outline-none shadow-sm rounded-sm  grow' type={passwordVisible ? "text" : "password"} value={temporaryPassword} onChange={(e) => { setTemporaryPassword(e.target.value) }} />
                                            <button onClick={()=>{setPasswordVisible(!passwordVisible)}}>
                                                {passwordVisible ? <AiFillEyeInvisible className='text-gray-500' /> : <AiFillEye className='text-gray-500'/>}
                                            </button>
                                        </div>
                                    </div>

                                    <div className='flex justify-end'>
                                        <h3 className='pr-5 text-sm text-gray-800'>Note:</h3>
                                        <textarea className='border shadow-sm w-96 rounded-sm' value={note} onChange={(e) => { setNote(e.target.value) }} />
                                    </div>

                                    <div className='text-right'>
                                        <h3 className='text-sm text-gray-800'><span className='text-red-600'>*</span> Required</h3>
                                    </div>

                                </div>
                                <div className='bg-slate-100 py-3 flex space-x-2 justify-end px-4 border-t-2 rounded-md items-center'>
                                    <h4 className='grow text-red-600'>{errorMessage}</h4>
                                    <button className='border bg-white rounded-md px-6 py-2' onClick={() => { onCancel() }}>Cancel</button>
                                    <button className='border bg-green-500 text-white px-6 py-2 rounded-md' onClick={() => { onSave() }}>Save</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
  )
}

export default AddNewOrder