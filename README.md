# Student Feedback Portal

A full-stack MERN application that allows students to submit feedback and view feedback submitted by others in real-time.

---

## Tech Stack

- **Frontend:** React, Vite, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas (via Mongoose)
- **Utilities:** CORS, dotenv

---

## Architecture Overview

```text
Browser (React on port 5173)
       ↓  HTTP Request (fetch)
Express / Node Server (port 5000)
       ↓  Mongoose ODM
MongoDB Atlas (Cloud Database)
