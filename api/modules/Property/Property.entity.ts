import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../BaseEntity";
import Client from "../Client/Client.entity";
import { IsDefined } from "class-validator";

@Entity()
export default class Property extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Client, (client) => client.projects)
    client: Client;

    @Column()
    zipCode: string;

    @Column()
    address: string;

    @Column()
    city: string;

    @Column()
    price: number;

    @Column()
    rooms: number;

    @Column()
    bathrooms: number;

    @Column()
    area: number;

    @Column()
    year: number;

    @Column()
    description: string;

    @Column()
    image: string;

    @Column()
    type: string;

    @Column()
    bor: string;

    @Column()
    sold: boolean;
}
