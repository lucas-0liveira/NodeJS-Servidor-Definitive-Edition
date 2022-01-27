import { getCustomRepository } from "typeorm"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { UsersRepositories } from "../repositories/UsersRepositories"



interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute ({email, password}: IAuthenticateRequest){
        const usersRepositories = getCustomRepository (UsersRepositories);
    

    // verificar se existe um email 
        const user = await usersRepositories.findOne ({
            email
        });

        if (!user) {    
            throw new Error("Email/Password incorrect")
        }
    // verificar se a senha está correta
       const passwordMatch = await compare (password, user.password); 

       if (!passwordMatch){
           throw new Error ("Email/Password incorrect")
       }
    // Gerar token
       const token = sign ({
           email: user.email
       }, 
         "55ec3a66d4976584ee193d0b7ac87fd7", {
           subject: user.id,
           expiresIn: "1d",
        } 
      );
      
      return token;
    }
}

export {AuthenticateUserService}