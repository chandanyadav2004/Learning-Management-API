export default function CourseCard({course,enroll}){

  return(

    <div className="border p-4 rounded shadow">

      <h3 className="text-lg font-bold">
        {course.title}
      </h3>

      <p className="text-gray-600">
        {course.description}
      </p>

      <p className="text-sm mt-2">
        Instructor: {course.instructor?.name}
      </p>

      <button
      onClick={()=>enroll(course._id)}
      className="bg-blue-600 text-white px-4 py-2 mt-3">

        Enroll

      </button>

    </div>
  )
}