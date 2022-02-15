import './App.css';

import Dispatch from './components/Dispatch/Dispatch'
import Drivers from './components/Driver/Drivers'
import Integrations from './components/Integrations'
import Map from './components/Map'
import Orders from './components/Order/Orders'
import Reports from './components/Reports'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import React from 'react';
import { MdNotificationsOff } from 'react-icons/md'
import { IoMdHelpCircle } from 'react-icons/io'
import { AiFillCode } from 'react-icons/ai'
import { useState} from 'react'

function App() {
  const [selectedPage, setSelectedPage] = useState("drivers") // todo change to the actual default page when done

  const onASelected = (pageName) => {
    setSelectedPage(pageName)
  }

  return (
    <div className='pt-3'>
      <Router>
        <header>
          <nav className='flex justify-between px-4'>
            <div className='flex items-center space-x-2'>
              <AiFillCode className='text-green-700 h-8 w-8' />
              <div>
                <h2 className='font-bold text-slate-600'>Tech</h2>
                <h3 className='text-xs text-gray-500'>Powered by Chala</h3>
              </div>
            </div>
            <div className='flex space-x-9 justify-center items-center'>
              <Link to='/dispatch' className={`hover:text-green-400 ${selectedPage === "dispatch" ? "text-green-400 font-semibold" : "text-gray-500"}`} onClick={() => { onASelected("dispatch") }}>Dispatch</Link>
              <Link to='/orders' className={`hover:text-green-400 ${selectedPage === "orders" ? "text-green-400 font-semibold" : "text-gray-500"}`} onClick={() => { onASelected("orders") }}>Orders</Link>
              <Link to='/drivers' className={`hover:text-green-400 ${selectedPage === "drivers" ? "text-green-400 font-semibold" : "text-gray-500"}`} onClick={() => { onASelected("drivers") }}>Drivers</Link>
              <Link to='/map' className={`hover:text-green-400 ${selectedPage === "map" ? "text-green-400 font-semibold" : "text-gray-500"}`} onClick={() => { onASelected("map") }}>Map</Link>
              <Link to='/reports' className={`hover:text-green-400 ${selectedPage === "reports" ? "text-green-400 font-semibold" : "text-gray-500"}`} onClick={() => { onASelected("reports") }}>Reports</Link>
              <Link to='/integrations' className={`hover:text-green-400 ${selectedPage === "integrations" ? "text-green-400 font-semibold" : "text-gray-500"}`} onClick={() => { onASelected("integrations") }}>Integrations</Link>
              <Link to='/productTour' className={`hover:text-green-400 ${selectedPage === "productTour" ? "text-green-400 font-semibold" : "text-gray-500"}`}>Product Tour</Link>
              <MdNotificationsOff className='text-slate-500 h-5 w-5' />
              <IoMdHelpCircle className='text-slate-500 h-5 w-5' />
              <div className='bg-slate-200 text-green-500 h-8 w-8 rounded-full justify-center flex items-center'>
                N
              </div>
            </div>
          </nav>
          <div className='w-screen bg-slate-600 border-b mt-3'>

          </div>
        </header>
        <Routes>
          <Route path="/" element={<Dispatch />} />
          <Route path="/dispatch" element={<Dispatch />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/map" element={<Map />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/integrations" element={<Integrations />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
