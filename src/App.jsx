import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Protected from './components/Protected'

function App() {
  
  const [isAuth, setIsAuth] = useState(false)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login setIsAuth={setIsAuth}/>} />
          <Route path='/protected' element={isAuth ? <Protected /> : <Navigate to={"/login"} />}  />
          <Route path='/' element={<Navigate to={"/login"} />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
