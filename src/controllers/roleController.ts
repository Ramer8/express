import { Request, Response } from "express"

export const getRoles = (req:Request, res:Response) => {
  res.status(200).json({
    success: true,
    message: "Roles retrieved successfuly",
  })
}

export const createdRoles = (req:Request, res:Response) => {

    // Recuperar la info a traves del body
    // console.log(req.body);
    // const name = req.body.tasks

    const { task } = req.body.tasks[1] //hacemos destructuring y me traigo el id 
    console.log(task);

    res.status(200).json({
        success: true,
        message: "Roles Created  successfuly",
    })
}
export const updatedRoles = (req:Request, res:Response) => {

//recuperar parametro (params) de la ruta
req.params.id

console.log(req.params.id);

    res.status(200).json({
        success: true,
        message: "Roles Updated  successfuly",
    })
}

export const deletedRoles = (req:Request, res:Response) => {
//recuperar parametro de la ruta
req.params.id
console.log(req.params.id)
  res.status(200).json({
    success: true,
    message: "Delete roles",
  })
}