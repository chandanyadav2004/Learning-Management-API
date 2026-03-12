# Learning Management System (LMS) - Backend

## Overview

This backend API is part of a **Learning Management System (LMS)** built using **Node.js, Express.js, and MongoDB**.

The system allows:

* **Instructors** to create courses.
* **Students** to enroll in courses and view their enrolled courses.

Authentication is handled using **JWT (JSON Web Tokens)** and passwords are securely stored using **bcrypt hashing**.

---

# Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs
* dotenv
* CORS

---

# Project Structure

```
backend
│
├── controllers
│   ├── auth.controller.js
│   └── course.controller.js
│
├── models
│   ├── user.model.js
│   └── course.model.js
│
├── routes
│   ├── auth.routes.js
│   └── course.routes.js
│
├── middleware
│   └── auth.middleware.js
│
├── config
│   └── db.js
│
├── app.js
└── package.json
```

---

# Installation

### 1. Clone the repository

```
git clone <repository_url>
cd backend
```

---

### 2. Install dependencies

```
npm install
```

---

### 3. Create Environment Variables

Create a `.env` file inside the backend folder.

Example:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

### 4. Start the server

```
npm start
```

Server will run on:

```
http://localhost:5000
```

---

# Database Schema

## User Collection

```
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  role: "student" | "instructor",
  createdAt: Date,
  updatedAt: Date
}
```

---

## Course Collection

```
{
  _id: ObjectId,
  title: String,
  description: String,
  instructor: ObjectId (ref: User),
  students: [ObjectId (ref: User)],
  createdAt: Date,
  updatedAt: Date
}
```

---

# Authentication

JWT is used for authentication.

After login, a token is generated and must be included in request headers:

```
Authorization: Bearer <token>
```

---

# API Endpoints

## 1. Register User

POST

```
/api/auth/register
```

Request Body

```
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456",
  "role": "student"
}
```

Rules:

* Email must be unique
* Password is hashed before saving

---

## 2. Login User

POST

```
/api/auth/login
```

Request Body

```
{
  "email": "john@example.com",
  "password": "123456"
}
```

Response

```
{
  "token": "JWT_TOKEN",
  "user": {
    "id": "...",
    "name": "John Doe",
    "role": "student"
  }
}
```

---

## 3. Create Course (Instructor Only)

POST

```
/api/courses
```

Headers

```
Authorization: Bearer <token>
```

Body

```
{
  "title": "Node.js Masterclass",
  "description": "Complete backend development"
}
```

Rules:

* Only instructors can create courses.

---

## 4. Get All Courses

GET

```
/api/courses
```

Returns list of all available courses.

---

## 5. Enroll in Course

POST

```
/api/courses/:id/enroll
```

Headers

```
Authorization: Bearer <token>
```

Rules:

* Only students can enroll.
* Students cannot enroll twice.
* Instructor cannot enroll in their own course.

---

## 6. Get My Courses

GET

```
/api/courses/mycourses
```

Headers

```
Authorization: Bearer <token>
```

Returns courses where the student is enrolled.

---

# Business Logic Implemented

* Password hashing with bcrypt
* JWT authentication
* Role-based access control
* Duplicate enrollment prevention
* Instructor cannot enroll in own course

---

# Running the API

Start server:

```
npm start
```

Test APIs using:

* Postman
* Thunder Client
* Insomnia

---

# Author

Chandan Yadav
