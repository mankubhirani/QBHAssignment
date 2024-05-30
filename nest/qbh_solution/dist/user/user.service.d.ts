import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './create-user.dto';
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    create(createUserDto: CreateUserDto): Promise<User>;
    update(id: number, updateUserDto: CreateUserDto): Promise<User>;
    remove(id: number): Promise<void>;
}
