import { UsersRepositories } from "../repositories/UsersRepositories"

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {

    async execute ({ name, email, admin}: IUserRequest){
        const usersRepository = new UsersRepositories;

        console.log ("email", email);

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
            admin
        })

        await usersRepository.save (user);

        return user;
    }

}

export {CreateUserService}