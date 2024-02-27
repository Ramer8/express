import 'dotenv/config'
import express, { Application } from "express"
import { createdRoles, deletedRoles, getRoles, updatedRoles } from "./controllers/roleController"


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

app.get("/roles",getRoles)
app.post("/roles",createdRoles)
app.put("/roles/:id",updatedRoles)
app.delete("/roles/:id",deletedRoles)