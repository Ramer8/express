import { Request, Response } from "express";
import { User } from "../models/User";
import bcrypt from "bcrypt";

export const RegisterUser = async (req : Request, res : Response) => {
    try {
        const reqMail : string = req.body.email;
        const reqFirstName : string = req.body.first_name;
        const reqLastName : string = req.body.last_name;
        const reqPass : string = req.body.password_hash;

        const regexpPass : RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/;

        if(reqPass.length < 10 || !regexpPass.test(reqPass) || reqPass.includes(' ')){
            return res.status(400).json({
                success: false,
                message: "Password not inside the standards (shorter than 10 and without special characters, mayus, minus and/or numbers and with spaces)"
            });
        }
        const validEmail : RegExp = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!validEmail.test(reqMail) ){
          return res.status(400).json(
            {
              success: false,
              message: "Email inserted not valid - Bad structure"
            }
          )
        }
        const cryptedPass = bcrypt.hashSync(reqPass, 8);

        const newUser = await User.create({
            first_name: reqFirstName,
            last_name: reqLastName,
            email: reqMail,
            password: cryptedPass,
            role: {
                id:1
            }
        }).save()


        return res.status(201).json({
            success: true,
            message: "User registered into DB successfully",
            //  data: newUser

        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Register user failure",
            error: error
        });
    }
}
export const LoginUser = (req : Request, res : Response) => {
    try {
        return res.status(201).json({
            success: true,
            message: "User logged successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Login user failure",
            error: error
        });
    }
}

// {
//   "first_name":"Mark Antony",
//   "last_name": "Killbill",
//   "password_hash":"1fddds234567890Bn$",
//   "email":"reafdddsfg@fdsag.com",
//   "role_id":1
// }












