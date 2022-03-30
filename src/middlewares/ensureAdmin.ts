import { Request, Response, NextFunction } from "express"
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";



export async function ensureAdmin (
   request: Request,
   response: Response,
   next: NextFunction
){

   const {user_id} = request;

   const usersRepositories = getCustomRepository(UsersRepositories);
   
   const {admin} = await usersRepositories.findOne(user_id);

   //verificar se usuário é admin
   //colocando 'false' em const admin torna o usuário sem ser admin
   //colocando 'true' em const admin torna o usuário admin para cadastrar qualquer coisa
   

   if (admin){
      return next();
   }

   return response.status(401).json({
      error: "Unauthorized",
   });
}

