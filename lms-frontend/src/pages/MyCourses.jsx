import { useEffect,useState } from "react"
import API from "../api/api"
import Navbar from "../components/Navbar"

export default function MyCourses(){

  const [courses,setCourses] = useState([])

  useEffect(()=>{
    API.get("/courses/mycourses")
      .then(res=>setCourses(res.data))
  },[])

  return(

    <>
      <Navbar/>

      <div className="p-10">

        <h2 className="text-xl mb-4">My Courses</h2>

        {courses.map(c=>(
          <div key={c._id}
          className="border p-3 mb-3">

            {c.title}

          </div>
        ))}

      </div>
    </>
  )
}