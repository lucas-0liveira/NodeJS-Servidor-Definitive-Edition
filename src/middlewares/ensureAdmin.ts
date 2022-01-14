import { Request, Response, NextFunction } from "express"



export function ensureAdmin (
   request: Request,
   response: Response,
   next: NextFunction
){
   //verificar se usuário é admin
   //colocando 'false' em const admin torna o usuário sem ser admin
   //colocando 'true' em const admin torna o usuário admin para cadastrar qualquer coisa
   const admin = false;

   if (admin){
      return next();
   }

   return response.status(401).json({
      error: "Unauthorized",
   });
}

