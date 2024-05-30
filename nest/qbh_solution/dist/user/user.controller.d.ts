import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    create(createUserDto: CreateUserDto): Promise<User>;
    update(id: number, updateUserDto: CreateUserDto): Promise<User>;
    remove(id: number): Promise<void>;
}
