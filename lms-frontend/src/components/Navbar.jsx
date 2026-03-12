import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export default function Navbar(){

  const { user, logout } = useContext(AuthContext)

  return(

    <nav className="bg-blue-600 text-white p-4 flex justify-between">

      <h1 className="font-bold">LMS</h1>

      <div className="flex gap-4">

        {user?.role === "student" && (
          <>
            <Link to="/courses">Courses</Link>
            <Link to="/mycourses">My Courses</Link>
          </>
        )}

        {user?.role === "instructor" && (
          <Link to="/create">Create Course</Link>
        )}

        <button onClick={logout}>Logout</button>

      </div>

    </nav>
  )
}