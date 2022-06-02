import { NextFunction, Response } from "express";
import NotFoundError from "../../errors/NotFoundError";
import { AuthRequest } from "../../middleware/auth/auth.types";
import AgencyService from "./Agency.service";
import { AgencyBody } from "./Agency.types";

export default class AgencyController {
    private agencyService: AgencyService;

    constructor() {
        this.agencyService = new AgencyService();
    }

    all = async (req: AuthRequest, res: Response, next: NextFunction) => {
        const agencies = await this.agencyService.all();
        res.json(agencies);
    }

    find = async (
        req: AuthRequest<{ id: number }>,
        res: Response,
        next: NextFunction
    ) => {
        const agency = await this.agencyService.findOne(req.params.id);
        if (!agency) {
            next(new NotFoundError());
            return
        }
        res.json(agency);
    }

    create = async (
        req: AuthRequest<{}, {}, AgencyBody>,
        res: Response,
        next: NextFunction
    ) => {
        const agency = await this.agencyService.create(req.body);
        res.json(agency);
    }

    update = async (
        req: AuthRequest<{ id: number }, {}, AgencyBody>,
        res: Response,
        next: NextFunction
    ) => {
        const agency = await this.agencyService.update(req.params.id, req.body);
        return res.json(agency);
    }

    delete = async (
        req: AuthRequest<{ id: number }>,
        res: Response,
        next: NextFunction
    ) => {
        const agency = await this.agencyService.delete(req.params.id);
        return res.json(agency);
    }
}