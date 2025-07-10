# 🔐 Secure Inventory API

A secure RESTful API built with **Node.js**, **Express**, **MongoDB**, and **JWT Authentication** to manage inventory items and user access.

---

## 🚀 Features

- ✅ User Registration and Login (with hashed passwords using `bcryptjs`)
- ✅ JWT-based Authentication
- ✅ CRUD Operations on Items (name, quantity, rate)
- ✅ Secure `.env` configuration
- ✅ MongoDB database integration

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB + Mongoose
- **Authentication**: JWT + Bcrypt
- **Other Tools**: Dotenv, Git, GitHub

---

## 📁 Project Structure

secure-inventory-api/
├── config/ # Database connection
├── controller/ # Controllers for user/item routes
├── model/ # Mongoose schemas
├── routes/ # Route definitions
├── service/ # Business logic
├── .env # Environment variables (ignored in Git)
├── .gitignore
├── server.js # Express app entry point
├── package.json

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/inventoryDB
JWT_SECRET=your_jwt_secret


##📦 Installation
git clone https://github.com/AkashGupta-04/secure-inventory-api.git
cd secure-inventory-api
npm install

##▶️ Run the Server
node server.js
The server will run on:
http://localhost:5000

##🔄 API Endpoints
| Method | Endpoint             | Description       |
| ------ | -------------------- | ----------------- |
| POST   | `/api/auth/register` | Register new user |
| POST   | `/api/auth/login`    | Login & get JWT   |

##📦 Item Routes
| Method | Endpoint         | Description     |
| ------ | ---------------- | --------------- |
| GET    | `/api/items`     | Get all items   |
| POST   | `/api/items`     | Create new item |
| PUT    | `/api/items/:id` | Update item     |
| DELETE | `/api/items/:id` | Delete item     |

##📬 Contact
Made with by Akash Gupta

##📜 License
This project is licensed under the MIT License.


---

Once you've pasted it:

1. Save the file as `README.md` in your root folder.
2. Push it with:

```bash
git add README.md
git commit -m "Add README.md with project details"
git push
