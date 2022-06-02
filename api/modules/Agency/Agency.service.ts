import { AppDataSource } from "../../database/DataSource";
import { Repository } from "typeorm";
import Agency from "./Agency.entity";
import { AgencyBody } from "./Agency.types";

export default class AgencyService {
    private agencyRepository: Repository<Agency>;

    constructor() {
        this.agencyRepository = AppDataSource.getRepository(Agency);
    }

    all = async () => {
        const agencies = await this.agencyRepository.find({
            relations: ["properties", "users"]
        });
        return agencies;
    }

    findOne = async (id: number) => {
        const agency = await this.agencyRepository.findOne({
            where: { id },
            relations: ["properties", "users"]
        });
        return agency;
    }

    create = async (body: AgencyBody) => {
        const agency = await this.agencyRepository.save(
            this.agencyRepository.create(body)
        );
        return agency;
    }

    update = async (id: number, body: AgencyBody) => {
        let agency = await this.findOne(id);
        if (agency) {
            agency = await this.agencyRepository.save({
                ...agency,
                ...body
            });
        }
        return agency;
    }

    delete = async (id: number) => {
        let agency = await this.findOne(id);
        if (agency) {
            await this.agencyRepository.remove(agency);
        }
        return agency;
    }
}