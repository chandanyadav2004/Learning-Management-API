import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"

export default function Dashboard(){

  const { user } = useContext(AuthContext)

  return(

    <>
      <Navbar/>

      <div className="p-10">

        <h1 className="text-3xl font-bold mb-6">
          Welcome {user?.name}
        </h1>

        {user?.role === "student" && (

          <div className="flex gap-6">

            <Link
              to="/courses"
              className="bg-blue-600 text-white px-6 py-4 rounded shadow"
            >
              Browse Courses
            </Link>

            <Link
              to="/mycourses"
              className="bg-green-600 text-white px-6 py-4 rounded shadow"
            >
              My Courses
            </Link>

          </div>

        )}

        {user?.role === "instructor" && (

          <div className="flex gap-6">

            <Link
              to="/create"
              className="bg-purple-600 text-white px-6 py-4 rounded shadow"
            >
              Create Course
            </Link>

          </div>

        )}

      </div>
    </>
  )
}