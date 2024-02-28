import { Request, Response } from "express"
import { User } from "../models/User"

export const getUser = async (req: Request, res: Response) => {
  try {
 const users = await User.find()

    res.status(200).json({
      success: true,
      message: "user retriever successfully",
      data: users
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "user can't be retriever successfully",
      error: error,
    })
  }
}
