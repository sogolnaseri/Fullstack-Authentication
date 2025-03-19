# Fullstack Authentication

A full-stack authentication system built using React (Frontend), Node.js & Express (Backend), and MongoDB (Database) with secure JWT authentication.

## 🚀 Live Demo
<img width="807" alt="image" src="https://github.com/user-attachments/assets/4ae613b4-5774-4427-963d-0fa2dca6e966" />
<img width="836" alt="image" src="https://github.com/user-attachments/assets/00f29077-bd83-4bb4-b239-11c9b55b8038" />


 ## 🚀 Live Demo
🔗 [Frontend](https://fullstack-authentication-fe.vercel.app/login)  
🔗 [Backend](https://fullstack-auth-backend.onrender.com)

---

## 🛠️ Tech Stack
### **Frontend (React)**

- **React.js:** Component-based UI
- **React Router:** Client-side routing
- **Axios:** HTTP requests
- **React Query:** Data fetching and caching
- **React Context API:** Global state management
- **CSS (Styled Components / Tailwind):** Styling

---
### **Backend (Node.js & Express)**

- **Express.js:** Backend framework
- **RMongoDB & Mongoose:** NoSQL database
- **bcrypt.js:** Password hashing
- **jsonwebtoken (JWT):** Authentication
- **dotenv:** Environment variables
- **CORS:** Cross-Origin Resource Sharing

---
### Features

- User Authentication (Signup, Login, Logout)
- Secure JWT-based authentication
- Lazy Loading Data with react-window
- Protected Routes with PrivateRoute & Context API
- API calls using Axios & React Query
- Responsive & modern UI
- Backend deployed on Render.com
- Frontend deployed on Vercel

---

### Environment Variables
Create a `.env` file in the backend directory and add:
```sh
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
In the frontend, add a `.env` file:
```sh
REACT_APP_API_BASE_URL=https://fullstack-auth-backend.onrender.com/api
```
---
### Setup & Run Locally
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/sogolnaseri/fullstack-authentication.git
cd fullstack-authentication
```
---

### **2️⃣ Install dependencies**
Backend
```sh
cd backend
npm install
```
Frontend
in the root folder:
```sh
npm install
```
---


### **3️⃣ Run the development servers**
Backend
```sh
npm start
```
Server runs on http://localhost:5001

Frontend
```sh
npm start
```
App runs on http://localhost:3000

---

## API Endpoints
| Method  | Endpoint | Description | Auth Required
| --- | ---- | ---- | ---- |
| `POST` | `/api/auth/signup` |  Register new user | ❌ No
| `POST` | `/api/auth/login` |  Authenticate user & get JWT | ❌ No
| `GET` | `/api/auth/me` |  Get user details (Protected) | ✅ Yes
| `GET` | `/api/items` |  Get lazy-loaded items | ✅ Yes

---
## Deployment

- Backend hosted on Render [Render](https://render.com/).
- Frontend hosted on Vercel [Vercel](https://vercel.com/).
- MongoDB managed with MongoDB Atlas [MongoDB Atlas](https://www.mongodb.com/)




