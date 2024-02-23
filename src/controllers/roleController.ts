import { Request, Response } from "express"

export const getRoles = (req:Request, res:Response) => {
  res.status(200).json({
    success: true,
    message: "Roles retrieved successfuly",
  })
}

export const createdRoles = (req:Request, res:Response) => {
    res.status(200).json({
        success: true,
        message: "Roles Created  successfuly",
    })
}
export const updatedRoles = (req:Request, res:Response) => {
    res.status(200).json({
        success: true,
        message: "Roles Updated  successfuly",
    })
}

export const deletedRoles = (req:Request, res:Response) => {
  res.status(200).json({
    success: true,
    message: "Delete roles",
  })
}