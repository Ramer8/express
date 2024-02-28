import { Request, Response } from "express"
import { User } from "../models/User"

export const getUser = async (req: Request, res: Response) => {
  try {
    const users = await User.find()

    res.status(200).json({
      success: true,
      message: "user retriever successfully",
      data: users,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "user can't be retriever successfully",
      error: error,
    })
  }
}

export const getUserbyId = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id

    const user = await User.findOneBy({
      id: parseInt(userId),
    })
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found",
        data: user,
      })
    }
    res.status(200).json({
      success: true,
      message: "user retriever successfully",
      data: user,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "user can't be retriever successfully",
      error: error,
    })
  }
}

export const updateUserbyId = async (req: Request, res: Response) => {
  try {

    const userId = req.params.id
    const name = req.body.name

console.log("the new name is: ", name)

//validar datos
    const user = await User.findOneBy(
      {
      id: parseInt(userId),
    }
    )

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      })
    }
    const userUpdated = await User.update(
      {
        id: parseInt(userId)
      },
      {
        first_name: name,
      }
    )

    //responder
    res.status(200).json({
      success: true,
      message: "User updated ",
      data: userUpdated,
      name,
    })
    
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "user can't be updated",
      error: error,
    })
  }
}

export const deleteUserById = async (req: Request, res: Response) => {
  try {

    console.log(req.params.id);

    const userId = req.params.id
    // const userToRemove = await User.findOneBy({
    const userToRemove: any = await User.findOneBy({
      id:parseInt(userId)
    })

    if (!userToRemove) {
       res.status(404).json({
        success: false,
        message: "User can't be deleted",
       
      })
    }
    
 const userDeleted = await User.delete(userToRemove)

    res.status(200).json({
      success: false,
      message: "user deleted",
      data: userDeleted
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User can't be deleted",
      error: error,
    })
  }
}