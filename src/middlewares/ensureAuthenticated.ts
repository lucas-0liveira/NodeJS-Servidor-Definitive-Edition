import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface Ipayload {
  sub: string; 
}

export function ensureAuthenticated (
    request: Request, 
    response: Response, 
    next: NextFunction
    ) {
     
      //Receber o token
      const authToken = request.headers.authorization;

      // Validar se token está preenchido 
      if(!authToken){
        return response.status(401).end();
      }

      const [, token] = authToken.split(" ");

      try{
        //Validar se token é valido 
        const { sub } = verify(token, "55ec3a66d4976584ee193d0b7ac87fd7") as Ipayload;

        //Recuperar informações do usuário
        request.user_id = sub;

        return next(); 
      } catch (err) {
        return response.status(401).end();
      }
      
      



}