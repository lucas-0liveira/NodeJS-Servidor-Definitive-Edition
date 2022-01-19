import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}

class CreateUserService {
    
    async execute ({ name, email, admin, password}: IUserRequest){
        const usersRepository = getCustomRepository(UsersRepositories);

        console.log("email", email);

        if(!email){
            throw new Error ("Email incorrect");    
        }

        const userArealdyExists = await usersRepository.findOne({
            email,
        });
        
        if (userArealdyExists){
            throw new Error ("User already exists");
        }
        
        const user = usersRepository.create ({
            name,
            email,
            admin, 
            password, 
        }); 

        await usersRepository.save (user);

        return user;
    }

}

export {CreateUserService};