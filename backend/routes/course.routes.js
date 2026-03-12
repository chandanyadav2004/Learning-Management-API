const router = require("express").Router()
const protect = require("../middleware/auth.middleware")
const {
  createCourse,
  enrollCourse,
  getMyCourses,
  getAllCourses
} = require("../controllers/course.controller")

router.post("/", protect, createCourse)
router.post("/:id/enroll", protect, enrollCourse)
router.get("/mycourses", protect, getMyCourses)
router.get("/", protect, getAllCourses)

module.exports = router