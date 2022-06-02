import { Column, Entity, PrimaryGeneratedColumn, OneToMany  } from "typeorm";
import { BaseEntity } from "../BaseEntity";
import { IsDefined } from "class-validator";
import Property from "../Property/Property.entity";
import User from "../User/User.entity";

@Entity()
export default class Agency extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @IsDefined()
    @Column()
    name: string;
    
    @IsDefined()
    @Column()
    description: string;

    @IsDefined()
    @Column()
    address: string;

    @IsDefined()
    @Column()
    zipCode: string;

    @IsDefined()
    @Column()
    city: string;

    @IsDefined()
    @Column()
    phone: string;

    @OneToMany(() => Property, (property) => property.agency)
    properties: Property[];

    @OneToMany(() => User, (user) => user.agency)
    users: User[];
}
