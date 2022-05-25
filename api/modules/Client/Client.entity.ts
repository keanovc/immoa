import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { isUndefined } from "util";
import { BaseEntity } from "../BaseEntity";
import Property from "../Property/Property.entity";
import { IsDefined, IsEmail } from "class-validator";

@Entity()
export default class Client extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @IsDefined()
    @Column()
    name: string;

    @IsDefined()
    @IsEmail()
    @Column()
    contactEmail: string;

    @IsDefined()
    @Column()
    contactName: string;

    @OneToMany(() => Property, (property) => property.client)
    projects: Property[];
}