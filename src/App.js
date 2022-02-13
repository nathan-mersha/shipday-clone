import './App.css';

import Dispatch from './components/Dispatch'
import Drivers from './components/Driver/Drivers'
import Integrations from './components/Integrations'
import Map from './components/Map'
import Orders from './components/Orders'
import Reports from './components/Reports'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react';
import { MdNotificationsOff } from 'react-icons/md'
import { IoMdHelpCircle } from 'react-icons/io'
import { AiFillCode } from 'react-icons/ai'

function App() {
  return (
    <div className='pt-3'>
    
      <header>
        <nav className='flex justify-between px-4'>
          <div className='flex items-center space-x-2'>
            <AiFillCode className='text-green-700 h-8 w-8'/>
            <div>
              <h2 className='font-bold text-slate-600'>Tech</h2>
              <h3 className='text-xs text-gray-500'>Powered by Chala</h3>
            </div>
          </div>

          <div className='flex space-x-9 justify-center items-center'>
            <a href='/dispatch' className='hover:text-green-400'>Dispatch</a>
            <a href='/orders' className='hover:text-green-400'>Orders</a>
            <a href='/drivers' className='hover:text-green-400'>Drivers</a>
            <a href='/map' className='hover:text-green-400'>Map</a>
            <a href='/reports' className='hover:text-green-400'>Reports</a>
            <a href='/integrations' className='hover:text-green-400'>Integrations</a>
            <a className='text-green-400 underline'>Product Tour</a>
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
      <Router>
        <Routes>
          <Route path="/" element={<Drivers />} />
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
