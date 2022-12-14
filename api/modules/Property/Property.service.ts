import Property from "./Property.entity";
import ConflictError from "../../errors/ConflictError";
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
            relations: ["agency"],
            order: {
                updatedAt: "ASC"
            }
        });
        return properties;
    }

    allByAgency = async (id: number) => {
        const properties = await this.repository.find({
            where: { agency: { id } },
            relations: ["agency"],
            order: {
                updatedAt: "ASC"
            }
        });
        return properties;
    };

    allBuy = async () => {
        const properties = await this.repository.find({
            where: {
                bor: "buy"
            },
            relations: ["agency"]
        });
        return properties;
    }

    allBuyPublic = async () => {
        const properties = await this.repository.find({
            where: {
                bor: "buy",
            },
            select: ["id", "zipCode", "city", "rooms", "bathrooms", "area", "description", "image", "type", "bor", "year", "price", "sold"]
        });
        return properties;
    }

    allRent = async () => {
        const properties = await this.repository.find({
            where: {
                bor: "rent"
            },
            relations: ["agency"]
        });
        return properties;
    }

    allRentPublic = async () => {
        const properties = await this.repository.find({
            where: {
                bor: "rent",
            },
            select: ["id", "zipCode", "city", "rooms", "bathrooms", "area", "description", "image", "type", "bor", "year", "price", "sold"]
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

    findOnePublic = async (id: number) => {
        const property = await this.repository.findOne({
            where: { id },
            select: ["id", "zipCode", "city", "rooms", "bathrooms", "area", "description", "image", "type", "bor", "year", "price", "sold"]
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
            throw new ConflictError();
        }
        const newProperty = await this.repository.save(
            this.repository.create(body)
        );
        return newProperty;
    }

    createByAgency = async (body: PropertyBody, agencyId: number) => {
        const property = await this.findOneBy({ address: body.address });
        if (property) {
            throw new ConflictError();
        }
        const newProperty = await this.repository.save(
            this.repository.create({
                ...body,
                agency: { id: agencyId }
            })
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