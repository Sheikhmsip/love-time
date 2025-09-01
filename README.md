# Love Time - Backend

A Node.js + Express backend with **MongoDB (Mongoose)** for database management. This backend handles **user authentication, chat messaging, and friend requests**, providing a scalable API layer for the Love Time application.

---

## 🚀 Features

### User Authentication
- Signup / Login with JWT-based authentication  
- Protected routes using middleware  

### User Management
- Retrieve user details  
- Update profile information  

### Friend Requests
- Send and manage friend requests  
- Accept requests  

### Chat System
- Real-time chat endpoints (designed for future socket integration)  
- Message history management  

### Secure Middleware
- Auth middleware for protecting private routes  
- Request validation  

---

## 🛠 Tech Stack

- **Runtime**: Node.js  
- **Framework**: Express.js  
- **Database**: MongoDB with Mongoose  
- **Authentication**: JWT (JSON Web Tokens)  
- **Other Tools**: dotenv for environment variables  

---

## 📂 Project Structure
backend/
├── src/
│ ├── controllers/ # Handles request logic
│ │ ├── auth.controller.js
│ │ ├── chat.controller.js
│ │ └── user.controller.js
│ │
│ ├── lib/ # Utilities (DB connection, streaming, etc.)
│ │ ├── db.js
│ │ └── stream.js
│ │
│ ├── middleware/ # Middleware functions
│ │ └── auth.middleware.js
│ │
│ ├── models/ # Mongoose models
│ │ ├── FriendRequest.js
│ │ └── User.js
│ │
│ ├── routes/ # Express route definitions
│ │ ├── auth.route.js
│ │ ├── chat.route.js
│ │ └── user.route.js
│ │
│ └── server.js # Entry point
│
├── .env # Environment variables
├── package.json
├── package-lock.json
└── .gitignore

# ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Sheikhmsip/love-time.git
cd love-time 

### 2️⃣ Install Dependencies
```bash 
npm install 