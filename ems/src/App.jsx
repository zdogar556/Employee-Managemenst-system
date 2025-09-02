import React, { useState, useEffect, useContext } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin=(email,password)=>{
    if(email === 'admin@example.com' && password === '123'){
      setUser('admin')
      console.log(user)
    }else if(email === 'employee@example.com' && password === '123'){
      setUser('employee')
    }else{
      alert('invalid Credentials');
    }
  }

  const data=useContext(AuthContext)

  console.log(data)

  // useEffect(() => {
  //   const user = getLocalStorage()
  //   setUser(user);
  // }, [])

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === 'admin' && <AdminDashboard />}
      {user === 'employee' && <EmployeeDashboard />}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  )
}

export default App
