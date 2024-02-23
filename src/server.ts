import express, { Application } from "express"
import { createdRoles, deletedRoles, getRoles, updatedRoles } from "./controllers/roleController"

import dotenv from "dotenv"

dotenv.config()

const app: Application = express()

const PORT = process.env.PORT || 4000

app.get("/healthy", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy",
  })
})
// creo el endpoint roles.
app.get("/roles",getRoles)

app.post("/roles",createdRoles)

app.put("/roles",updatedRoles)

app.delete("/roles",deletedRoles)

app.listen(PORT, () => {
  console.log(`Server is running at PORT: ${PORT}`)
})
