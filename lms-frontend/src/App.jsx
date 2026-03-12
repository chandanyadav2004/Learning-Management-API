import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import Courses from "./pages/Courses"
import MyCourses from "./pages/MyCourses"
import CreateCourse from "./pages/CreateCourse"

import { AuthProvider } from "./context/AuthContext"

function App(){

  return(

    <AuthProvider>

      <BrowserRouter>

        <Routes>

          {/* Default route */}
          <Route path="/" element={<Navigate to="/login" />} />

          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>

          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/mycourses" element={<MyCourses/>}/>
          <Route path="/create" element={<CreateCourse/>}/>

        </Routes>

      </BrowserRouter>

    </AuthProvider>

  )
}

export default App