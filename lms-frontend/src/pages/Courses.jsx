import { useEffect,useState } from "react"
import API from "../api/api"
import Navbar from "../components/Navbar"
import CourseCard from "../components/CourseCard"

export default function Courses(){

  const [courses,setCourses] = useState([])

  useEffect(()=>{
    API.get("/courses")
      .then(res=>setCourses(res.data))
  },[])

  const enroll = async(id)=>{
    await API.post(`/courses/${id}/enroll`)
    alert("Enrolled successfully")
  }

  return(

    <>
      <Navbar/>

      <div className="grid grid-cols-3 gap-6 p-10">

        {courses.map(course=>(
          <CourseCard
          key={course._id}
          course={course}
          enroll={enroll}
          />
        ))}

      </div>
    </>
  )
}