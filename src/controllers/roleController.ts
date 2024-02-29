import { Request, Response } from "express"
import { Role } from "../models/Role"

export const getRoles = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Roles retrieved successfuly",
  })
}

export const createdRoles = async (req: Request, res: Response) => {

try {

  const name = req.body.name


  if (name.length > 50) {
    return res.status(400).json({
      success: false,
      message: "Role name must be under 50 characters",
    })
  }
  const newRole = await Role.create({
  name: name
}).save()

  res.status(201).json({
    success: true,
    message: "Roles Created  successfuly",
    data: newRole
  })

} catch (error) {
  
  res.status(500).json({
    succes: false,
    message: "can't create roll,",
    error : error
  })
}
}
export const updatedRoles = (req: Request, res: Response) => {
  //recuperar parametro (params) de la ruta
  req.params.id

  console.log(req.params.id)

  res.status(200).json({
    success: true,
    message: "Roles Updated  successfuly",
  })
}

export const deletedRoles = (req: Request, res: Response) => {
  //recuperar parametro de la ruta
  req.params.id
  console.log(req.params.id)
  res.status(200).json({
    success: true,
    message: "Delete roles",
  })
}
