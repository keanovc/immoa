import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../BaseEntity";
import Agency from "../Agency/Agency.entity";
import { IsDefined } from "class-validator";

@Entity()
export default class Property extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @IsDefined()
    @Column()
    zipCode: string;

    @IsDefined()
    @Column()
    address: string;

    @IsDefined()
    @Column()
    city: string;

    @IsDefined()
    @Column()
    price: number;

    @IsDefined()
    @Column()
    rooms: number;

    @IsDefined()
    @Column()
    bathrooms: number;

    @IsDefined()
    @Column()
    area: number;

    @IsDefined()
    @Column()
    year: number;

    @IsDefined()
    @Column()
    description: string;

    @IsDefined()
    @Column()
    image: string;

    @IsDefined()
    @Column()
    type: string;

    @IsDefined()
    @Column()
    bor: string;

    @IsDefined()
    @Column()
    sold: boolean;

    @ManyToOne(() => Agency, (agency) => agency.properties)
    agency: Agency;
}
