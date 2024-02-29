import 'dotenv/config'
import express, { Application } from "express"
import { createdRoles, deletedRoles, getRoles, updatedRoles } from "./controllers/roleController"
 import { LoginUser, RegisterUser } from './controllers/authController'
import { deleteUserById, getUser, getUserbyId, updateUserbyId } from './controllers/userController'


export const app: Application = express()

app.use(express.json())

app.get("/healthy", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy",
  })
})

// register & login routes
app.post('/auth/register', RegisterUser);
app.post('/auth/login', LoginUser);

// user routes
app.get('/api/users', getUser)
app.get('/api/user/profile/:id',getUserbyId)
app.put('/api/user/profile/:id',updateUserbyId)
app.delete('/api/user/:id', deleteUserById);

// roles routes
app.get("/roles",getRoles)
app.post("/roles",createdRoles)
app.put("/roles/:id",updatedRoles)
app.delete("/roles/:id",deletedRoles)

// {
  // "first_name":"Mark Antony",
  // "last_name": "Killbill",
  // "password_hash":"1fddds234567890Bn$",
  // "email":"reafdddsfg@fdsag.com"
// }