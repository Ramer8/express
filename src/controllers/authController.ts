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

        // const newUser = await User.create({
        //     firstName: reqFirstName,
        //     lastName: reqLastName,
        //     email: reqMail,
        //     passwordHash: cryptedPass
        // }).save()

        return res.status(201).json({
            success: true,
            message: "User registered into DB successfully",

            // data: newUser

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


















// import { Request, Response } from "express"
// import { User } from "../models/User"
// import bcrypt from "bcrypt"

// export const RegisterUser = async (req: Request, res: Response) => {
  

//   try {
    
//     // console.log(req.body);
//     //   const email = req.body.email
//     //   const password = req.body.password

//     const { email, password } = req.body

//     //validacion password
//     const checkPass = (password: string) => {
//       if (password.length < 6 || password.length > 10) {
//         console.log(password)
//         return res.status(400).json({
//           success: false,
//           message: "La contraseña debe ser entre 6 y 10 caracteres",
//         })
//       }
//       checkPass(password)

//       const checkEmail = (email: string) => {
//         const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
//         if (!validEmail.test(email)) {
//           return res.status(400).json({
//             success: false,
//             message: "format email invalid",
//           })
//         }
//       }
//       checkEmail(email)

//       //Encrypt Pass
//       const passwordEncrypted = bcrypt.hashSync(password, 8)

//       //Test encrypted password
//       console.log(passwordEncrypted)

//     //   const NewUser = await User.create({
//     //     first_name: first_name,
//     //     last_name: last_name,
//     //     email: email,
//     //     password_hash: passwordEncrypted,
//     //     role: {
//     //       id: 1,
//     //     },
//     //   }).save()

//       return res.status(201).json({
//         success: true,
//         message: "User created successfully",
//       })

//     //   const newUser = await User.create({
//     //     name:name,
//     //     email:email,
//     //     password:passwordEncrypted,
//     //     role:{
//     //         id:1
//     //     }
//     // }).save()
      

  
//     }

//     //checkPass

//     // if (password.length < 6 || password.length > 10){
//     //     return res.status(400).json({
//     //             success: false,
//     //             message: "La contraseña debe estar entre 6 y 10 caracteres",
//     //     });

//     //checkEmail

//     //  const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
//     //     if (!validEmail.test(email) ){
//     //       return res.status(400).json(
//     //         {
//     //           success: false,
//     //           message: "format email invalid"
//     //         }
//     //       )
//     //     }
//     // }
//   } catch (error) {}
//     return res.status(201).json({
//       success: true,
//       message: "User registered into DB successfully",
//       //  data: newUser
//     })
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: "Register User failure",
//       error: error,
//     })
//   }
// }

// export const LoginUser = (req: Request, res: Response) => {


// }
