import express, { Application } from "express"
import { createdRoles, deletedRoles, getRoles, updatedRoles } from "./controllers/roleController"

import dotenv from "dotenv"

dotenv.config()

const app: Application = express()

// Cdo mi app esta en marcha va leer de arriba abajo, lo q nos llegue lo va a pasar a json hasta
//llegar ala funcion .json si no la encuentra ...
//lo de abajo lo que hace es parsearlo y pasarlo a objeto
app.use(express.json())

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

app.put("/roles/:id",updatedRoles)

app.delete("/roles/:id",deletedRoles)

app.listen(PORT, () => {
  console.log(`Server is running at PORT: ${PORT}`)
})
