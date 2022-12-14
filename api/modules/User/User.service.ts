import { UserBody } from './User.types';
import User from "./User.entity";
import ConflictError from '../../errors/ConflictError';
import { Repository } from "typeorm";
import { AppDataSource } from "../../database/DataSource";
import { createToken } from '../../middleware/auth';

export default class UserService {
    private repository: Repository<User>;

    constructor() {
        const repository = AppDataSource.getRepository(User);
        this.repository = repository;
    }

    all = async () => {
        const users = await this.repository.find({ 
            relations: ["agency"],
            order: {
                updatedAt: "ASC"
            }
        });
        return users;
    };

    findOne = async (id: number) => {
        const user = await this.repository.findOne({
            where: { id },
            relations: ["agency"],
        });
        return user;
    };

    findOneBy = async (options: object) => {
        const user = await this.repository.findOneBy(options);
        return user;
    };

    findByEmailWithPassword = async (email: string) => {
        const user = await this.repository
            .createQueryBuilder("user")
            .where("user.email = :email", { email })
            .select("user.password")
            .getOne();
        return user;
    };

    create = async (body: UserBody) => {
        const user = await this.findOneBy({ email: body.email });
        if(!user){
            const user = await this.repository.save(this.repository.create(body));
            const obj = {
                token: createToken(user),
                user:{
                    ...user,
                },
            }
            return obj;
        }
        throw new ConflictError();
    };

    update = async (id: number, body: UserBody) => {
        let user = await this.findOne(id);
        if (user) {
            user = await this.repository.save({ ...user, ...body });
        }
        return user;
    };

    delete = async (id: number) => {
        let user = await this.findOne(id);
        if (user) {
            await this.repository.softDelete({ id });
        }
        return user;
    };
}
