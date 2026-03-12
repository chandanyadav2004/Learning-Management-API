const Course = require("../models/course.model")

exports.createCourse = async (req, res) => {
  if (req.user.role !== "instructor")
    return res.status(403).json({ message: "Only instructor allowed" })

  const { title, description } = req.body

  const course = await Course.create({
    title,
    description,
    instructor: req.user.id
  })

  res.status(201).json(course)
}

exports.enrollCourse = async (req, res) => {
  // console.log("User from token:", req.user)
  if (req.user.role !== "student")
    return res.status(403).json({ message: "Only student allowed" })

  const course = await Course.findById(req.params.id)

  if (!course)
    return res.status(404).json({ message: "Course not found" })

  if (course.instructor.toString() === req.user.id)
    return res.status(400).json({ message: "Instructor cannot enroll" })

  if (course.students.includes(req.user.id))
    return res.status(400).json({ message: "Already enrolled" })

  course.students.push(req.user.id)
  await course.save()

  res.json({ message: "Enrolled successfully" })
}

const mongoose = require("mongoose")

exports.getMyCourses = async (req, res) => {
  // console.log("Student requesting courses:", req.user)
  try {
    const courses = await Course.find({
      students: new mongoose.Types.ObjectId(req.user.id)
    }).populate("instructor", "name email")

    res.json(courses)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
exports.getAllCourses = async (req, res) => {
  const courses = await Course.find()
    .populate("instructor", "name")

  res.json(courses)
}