import Property from "./Property.entity";
import { Repository } from "typeorm";
import { AppDataSource } from "../../database/DataSource";
import { PropertyBody } from "./Property.types";

export default class PropertyService {
    private repository: Repository<Property>;

    constructor() {
        const repository = AppDataSource.getRepository(Property);
        this.repository = repository;
    }

    all = async () => {
        const properties = await this.repository.find({
            relations: ["agency"]
        });
        return properties;
    }

    // allWithout = async () => {
    //     const properties = await this.repository.find({
    //         select: {
    //             id: true,
    //             zipCode: true,
    //             city: true,
    //             rooms: true,
    //             bathrooms: true,
    //             area: true,
    //             price: true,
    //             image: true,
    //             type: true,
    //             year: true,
    //             sold: true,
    //             bor: true,
    //             description: true,
    //         }
    //     });
    //     return properties;
    // }

    allByAgency = async (agencyId: number) => {
        const properties = await this.repository.find({
            relations: ["agency"],
            where: { agency: { id: agencyId } }
        });
        return properties;
    }

    findOne = async (id: number) => {
        const property = await this.repository.findOne({
            where: { id },
            relations: ["agency"]
        });
        return property;
    }

    findOneBy = async (options: object) => {
        const property = await this.repository.findOneBy(options);
        return property;
    }

    create = async (body: PropertyBody) => {
        const property = await this.findOneBy({ address: body.address });
        if (property) {
            return console.error("Property already exists");
        }
        const newProperty = await this.repository.save(
            this.repository.create(body)
        );
        return newProperty;
    }

    update = async (id: number, body: PropertyBody) => {
        let property = await this.findOne(id);
        if (property) {
            property = await this.repository.save({
                ...property,
                ...body
            });
        }
        return property;
    }

    delete = async (id: number) => {
        let property = await this.findOne(id);
        if (property) {
            await this.repository.softDelete({ id });
        }
        return property;
    }
}