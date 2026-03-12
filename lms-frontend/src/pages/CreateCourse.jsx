import { useState } from "react"
import API from "../api/api"
import Navbar from "../components/Navbar"

export default function CreateCourse(){

  const [form,setForm] = useState({
    title:"",
    description:""
  })

  const submit = async(e)=>{
    e.preventDefault()

    await API.post("/courses",form)

    alert("Course Created Successfully")

    setForm({
      title:"",
      description:""
    })
  }

  return(

    <>
      <Navbar/>

      <div className="flex justify-center mt-10">

        <form
          onSubmit={submit}
          className="bg-white shadow p-8 w-96"
        >

          <h2 className="text-xl font-bold mb-4">
            Create Course
          </h2>

          <input
            className="border w-full p-2 mb-3"
            placeholder="Course Title"
            value={form.title}
            onChange={(e)=>setForm({...form,title:e.target.value})}
          />

          <textarea
            className="border w-full p-2 mb-4"
            placeholder="Course Description"
            value={form.description}
            onChange={(e)=>setForm({...form,description:e.target.value})}
          />

          <button
            className="bg-blue-600 text-white w-full p-2 rounded"
          >
            Create Course
          </button>

        </form>

      </div>
    </>
  )
}