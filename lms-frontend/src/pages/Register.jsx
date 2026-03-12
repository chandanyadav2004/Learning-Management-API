import { useState } from "react"
import API from "../api/api"
import { useNavigate } from "react-router-dom"

export default function Register(){

  const navigate = useNavigate()

  const [form,setForm] = useState({
    name:"",
    email:"",
    password:"",
    role:"student"
  })

  const submit = async(e)=>{
    e.preventDefault()

    await API.post("/auth/register",form)

    alert("Registered Successfully")

    navigate("/login")
  }

  return(

    <div className="flex justify-center items-center h-screen">

      <form onSubmit={submit}
      className="bg-white p-8 shadow w-96">

        <h2 className="text-xl mb-4 font-bold">Register</h2>

        <input
        className="border w-full p-2 mb-3"
        placeholder="Name"
        onChange={(e)=>setForm({...form,name:e.target.value})}
        />

        <input
        className="border w-full p-2 mb-3"
        placeholder="Email"
        onChange={(e)=>setForm({...form,email:e.target.value})}
        />

        <input
        type="password"
        className="border w-full p-2 mb-3"
        placeholder="Password"
        onChange={(e)=>setForm({...form,password:e.target.value})}
        />

        <select
        className="border w-full p-2 mb-4"
        onChange={(e)=>setForm({...form,role:e.target.value})}
        >

          <option value="student">Student</option>
          <option value="instructor">Instructor</option>

        </select>

        <button className="bg-blue-600 text-white w-full p-2">
          Register
        </button>

      </form>

    </div>
  )
}