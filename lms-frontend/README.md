# Learning Management System (LMS) - Frontend

## Overview

This is the **frontend application** for the Learning Management System built using:

* React.js
* Vite
* TailwindCSS
* Axios
* React Router

The frontend interacts with the **Node.js backend API** to allow instructors to create courses and students to enroll in them.

---

# Tech Stack

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router DOM

---

# Project Structure

```
src
│
├── api
│   └── api.js
│
├── components
│   ├── Navbar.jsx
│   └── CourseCard.jsx
│
├── context
│   └── AuthContext.jsx
│
├── pages
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Dashboard.jsx
│   ├── Courses.jsx
│   ├── MyCourses.jsx
│   └── CreateCourse.jsx
│
├── App.jsx
├── main.jsx
└── style.css
```

---

# Installation

### 1. Navigate to frontend folder

```
cd frontend
```

---

### 2. Install dependencies

```
npm install
```

---

### 3. Start the development server

```
npm run dev
```

The application will run on:

```
http://localhost:5173
```

---

# Features

## Authentication

* User registration
* User login
* JWT token stored in localStorage

---

## Instructor Features

* Create new course

---

## Student Features

* Browse available courses
* Enroll in courses
* View enrolled courses

---

# Backend API Connection

The frontend communicates with backend API:

```
http://localhost:5000/api
```

Axios automatically attaches JWT token for protected requests.

---

# Pages Overview

### Register

Allows new users to register as:

* Student
* Instructor

### Login

Authenticates users and stores JWT token.

### Dashboard

Displays navigation options based on user role.

### Courses

Displays all available courses.

### My Courses

Shows courses enrolled by the student.

### Create Course

Allows instructors to create new courses.

---

# Running the Application

Start frontend:

```
npm run dev
```

Open browser:

```
http://localhost:5173
```

---

# Author

Chandan Yadav
