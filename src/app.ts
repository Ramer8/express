import 'dotenv/config'
import express, { Application } from "express"
import { createdRoles, deletedRoles, getRoles, updatedRoles } from "./controllers/roleController"
 import { LoginUser, RegisterUser } from './controllers/authController'
import { deleteUserById, getUser, getUserbyId, updateUserbyId } from './controllers/userControllers'


export const app: Application = express()

//lo de abajo lo que hace es parsearlo y pasarlo a objeto
app.use(express.json())

app.get("/healthy", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy",
  })
})
// creo el endpoint roles.


// register 
app.post('/auth/register', RegisterUser);
app.post('/auth/login', LoginUser);

app.delete('/api/user/:id', deleteUserById);

// user routes
app.get('/api/users', getUser)
app.get('/api/user/profile/:id',getUserbyId)
app.put('/api/user/profile/:id',updateUserbyId)


// 

app.get("/roles",getRoles)
app.post("/roles",createdRoles)
app.put("/roles/:id",updatedRoles)
app.delete("/roles/:id",deletedRoles)

// {
//   "first_name":"Mark Antony",
//   "last_name": "Killbill",
//   "password_hash":"1fddds234567890Bn$",
//   "email":"reafdddsfg@fdsag.com"
// }