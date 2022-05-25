import { NextFunction, Request, Response } from "express";
import NotFoundError from "../../errors/NotFoundError";
import { AuthRequest } from "../../middleware/auth/auth.types";
import PropertyService from "./Property.service";

export default class PropertyController {
    private propertyService: PropertyService;

    constructor() {
        this.propertyService = new PropertyService();
    }

    all = async (req: Request, res: Response, next: NextFunction) => {
        const properties = await this.propertyService.all();
        return res.json(properties);
    };

    find = async (
        req: Request<{ id: string }>,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const property = await this.propertyService.findOneBy({ id: req.params.id });
            if (!property) {
                next(new NotFoundError());
            }
            res.status(200).json(property);
        } catch (error) {
            next(error);
        }
    }

    create = async (req: Request, res: Response, next: NextFunction) => {
        const property = await this.propertyService.create(req.body);
        return res.json(property);
    }
    
    update = async (
        req: Request<{ id: string }>,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const property = await this.propertyService.update(
                parseInt(req.params.id),
                req.body
            );
            if (!property) {
                next(new NotFoundError());
            }
            res.status(200).json(property);
        } catch (error) {
            next(error);
        }
    }

    delete = async (
        req: Request<{ id: string }>,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const property = await this.propertyService.delete(parseInt(req.params.id));
            if (!property) {
                next(new NotFoundError());
            }
            res.status(200).json({});
        } catch (error) {
            next(error);
        }
    }
}