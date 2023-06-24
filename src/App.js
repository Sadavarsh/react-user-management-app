import React from 'react'
import { Route, Routes } from 'react-router-dom'


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './pages/Home';
import AddUser from './components/user/AddUser';
import ViewUser from './components/user/ViewUser';

const App = () => {
  return (
    <React.Fragment>
       <ToastContainer position="top-center" />
      
      <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/adduser' element={<AddUser />} />
       <Route path='/update/:id' element={<AddUser />} />
       <Route path='/viewuser/:id' element={<ViewUser />} />
      </Routes>
    </React.Fragment>
  )
}

export default App