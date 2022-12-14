import { NextFunction, Request, Response } from "express";
import { UploadedFile } from "express-fileupload";
import { UPLOAD_FOLDER } from "../../constants";

import NotFoundError from "../../errors/NotFoundError"; 
import { AuthRequest } from "../../middleware/auth/auth.types";

import { PropertyBody } from "./Property.types";
import PropertyService from "./Property.service";
import AgencyService from "../Agency/Agency.service";
import UserService from "../User/User.service";

const getImage = (req: Request) => {
    if (req.files.image) {
        const image: UploadedFile = Array.isArray(req.files.image)
            ? req.files.image[0]
            : req.files.image;
        const path = `${UPLOAD_FOLDER}/${new Date().getTime()}_${image.name}`;
        image.mv(path);
        return path;
    }
    return null;
};

export default class PropertyController {
    private propertyService: PropertyService;
    private agencyService: AgencyService;
    private userService: UserService;

    constructor() {
        this.propertyService = new PropertyService();
        this.agencyService = new AgencyService();
        this.userService = new UserService();
    }

    all = async (req: AuthRequest, res: Response, next: NextFunction) => {
        const properties = await this.propertyService.all();
        return res.json(properties);
    }

    allByAgency = async (
        req: Request<{ id: number }>,
        res: Response, 
        next: NextFunction
    ) => {
        const user = await this.userService.findOne(req.params.id);
        
        if (!user) {
            next(new NotFoundError());
            return;
        }
        const properties = await this.propertyService.allByAgency(user.agency.id);
        return res.json(properties);
    }

    allBuy = async (req: Request, res: Response, next: NextFunction) => {
        const properties = await this.propertyService.allBuy();
        return res.json(properties);
    }

    allRent = async (req: Request, res: Response, next: NextFunction) => {
        const properties = await this.propertyService.allRent();
        return res.json(properties);
    }

    allBuyPublic = async (req: Request, res: Response, next: NextFunction) => {
        const properties = await this.propertyService.allBuyPublic();
        return res.json(properties);
    }

    allRentPublic = async (req: Request, res: Response, next: NextFunction) => {
        const properties = await this.propertyService.allRentPublic();
        return res.json(properties);
    }

    find = async (
        req: AuthRequest<{ id: string }>,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const property = await this.propertyService.findOne(parseInt(req.params.id));
            if (!property) {
                next(new NotFoundError());
            }
            res.status(200).json(property);
        } catch (error) {
            next(error);
        }
    }

    findPublic = async (
        req: Request<{ id: string }>,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const property = await this.propertyService.findOnePublic(parseInt(req.params.id));
            if (!property) {
                next(new NotFoundError());
            }
            res.status(200).json(property);
        } catch (error) {
            next(error);
        }
    }

    create = async (
        req: Request<{}, {}, PropertyBody>,
        res: Response,
        next: NextFunction
    ) => {
        const image = getImage(req);

        if (image) {
            req.body.image = image;
        }
        
        const { body } = req;

        if (body.agencyId) {
            body.agency = await this.agencyService.findOne(body.agencyId);
        }

        const property = await this.propertyService.create(body);
        return res.json(property);
    }

    createByAgency = async (
        req: Request<{}>,
        res: Response,
        next: NextFunction
    ) => {
        const user = await this.userService.findOne(req.body.userId);

        const image = getImage(req);
        
        if (image) {
            req.body.image = image;
        }

        const body: PropertyBody = {
            ...req.body,
            agency: user.agency,
        };

        const property = await this.propertyService.createByAgency(body, user.agency.id);
        return res.json(property);
    }

    update = async (
        req: Request<{ id: string }, {}, PropertyBody>,
        res: Response,
        next: NextFunction
    ) => {
        const { body } = req;

        if (body.agencyId) {
            body.agency = await this.agencyService.findOne(body.agencyId);
        }

        const property = await this.propertyService.update(
            parseInt(req.params.id),
            body
        );

        return res.json(property);
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