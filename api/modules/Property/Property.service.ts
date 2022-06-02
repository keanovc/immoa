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
        const properties = await this.repository.find();
        return properties;
    }

    findOne = async (id: number) => {
        const property = await this.repository.findOneBy({ id });
        return property;
    }

    findOneBy = async (options: object) => {
        const property = await this.repository.findOneBy(options);
        return property;
    }

    create = async (body) => {
        const property = await this.findOneBy({ address: body.address });
        if (property) {
            return console.error("Property already exists");
        }
        const newProperty = await this.repository.save(body);
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