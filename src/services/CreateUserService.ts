import { UsersRepositories } from "../repositories/UsersRepositories"

interface IUserRequest{
    name: string,
    email: string,
    admin?: boolean,
}
class CreateUserService {
    async execute({name, email, admin} :IUserRequest){
        const usersRepository = new UsersRepositories();
        
        if(!email){
            throw new Error ("Email Incorrect");
        }

        const userAreadyExists = await usersRepository.findOne({
            email
        });

        if(userAreadyExists){
            throw new Error ("User already exists");
        }
        
        const user = usersRepository.create({
            name,
            email,
            admin,
        });

        await usersRepository.save(user);

        return user; 
    }
}

export {CreateUserService }