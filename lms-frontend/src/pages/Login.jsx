import { useState, useContext } from "react"
import API from "../api/api"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Login(){

  const navigate = useNavigate()
  const { login } = useContext(AuthContext)

  const [form,setForm] = useState({
    email:"",
    password:""
  })

  const submit = async(e)=>{
    e.preventDefault()

    const res = await API.post("/auth/login",form)

    login(res.data)

    navigate("/dashboard")
  }

  return(

    <div className="flex justify-center items-center h-screen">

      <form
      onSubmit={submit}
      className="bg-white p-8 shadow w-96">

        <h2 className="text-xl mb-4 font-bold">
          Login
        </h2>

        <input
        className="border w-full p-2 mb-3"
        placeholder="Email"
        onChange={(e)=>setForm({...form,email:e.target.value})}
        />

        <input
        type="password"
        className="border w-full p-2 mb-4"
        placeholder="Password"
        onChange={(e)=>setForm({...form,password:e.target.value})}
        />

        <button className="bg-green-600 text-white w-full p-2">
          Login
        </button>

      </form>

    </div>
  )
}