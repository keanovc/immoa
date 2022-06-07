import { NextFunction, Request, Response, Router } from "express";
import * as express from "express";
import * as path from "path";
import NotFoundError from "../errors/NotFoundError";
import { authJwt, authLocal, withRole } from "../middleware/auth";
import AuthController from "../modules/User/Auth.controller";
import PropertyController from "../modules/Property/Property.controller";
import UserController from "../modules/User/User.controller";
import AgencyController from "../modules/Agency/Agency.controller";
import { UserRole } from "../modules/User/User.constants";
import User from "../modules/User/User.entity";

const handleErrors =
    (func: (req: any, res: Response, next: NextFunction) => Promise<any>) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            await func(req, res, next);
        } catch (err) {
            next(err);
        }
};
  
const registerOnboardingRoutes = (router: Router) => {
    const authController = new AuthController();
    router.post("/login", authLocal, handleErrors(authController.login));
    router.post("/register", handleErrors(authController.register));
    
    const propertyController = new PropertyController();
    router.get("/propertiesbuypublic", handleErrors(propertyController.allBuyPublic));
    router.get("/propertiesrentpublic", handleErrors(propertyController.allRentPublic));
    router.get("/propertiespublic/:id", handleErrors(propertyController.findPublic));
};

const registerAdminRoutes = (router: Router) => {
    const adminRouter = Router();

    const userController = new UserController();
    adminRouter.get("/users", handleErrors(userController.all));
    adminRouter.get("/users/:id", handleErrors(userController.find));

    const propertyController = new PropertyController();
    adminRouter.get("/properties", handleErrors(propertyController.all));
    adminRouter.post("/properties", handleErrors(propertyController.create));
    adminRouter.patch("/properties/:id", handleErrors(propertyController.update));
    adminRouter.delete("/properties/:id", handleErrors(propertyController.delete));

    const agencyController = new AgencyController();
    adminRouter.get("/agencies", handleErrors(agencyController.all));
    adminRouter.get("/agencies/:id", handleErrors(agencyController.find));
    adminRouter.post("/agencies", handleErrors(agencyController.create));
    adminRouter.patch("/agencies/:id", handleErrors(agencyController.update));
    adminRouter.delete("/agencies/:id", handleErrors(agencyController.delete));

    router.use(withRole(UserRole.Admin), adminRouter);
};

const registerRealtorRoutes = (router: Router) => {
    const realtorRouter = Router();

    const propertyController = new PropertyController();
    realtorRouter.get("/propertiesbyagency", handleErrors(propertyController.allByAgency));

    router.use(withRole(UserRole.Realtor), realtorRouter);
};

const registerAuthenticatedRoutes = (router: Router) => {
    const authRouter = Router();

    const userController = new UserController();
    authRouter.get("/users/:id", handleErrors(userController.find));
    authRouter.patch("/users/:id", handleErrors(userController.update));
    authRouter.delete("/users/:id", handleErrors(userController.delete));

    const propertyController = new PropertyController();
    authRouter.get("/propertiesbuy", handleErrors(propertyController.allBuy));
    authRouter.get("/propertiesrent", handleErrors(propertyController.allRent));
    authRouter.get("/properties/:id", handleErrors(propertyController.find));
    
    registerRealtorRoutes(authRouter);
    
    registerAdminRoutes(authRouter);

    // authenticated routes use authJWT
    router.use(authJwt, authRouter);
};

const registerRoutes = (app: Router) => {
    // public folder
    app.use("/public", express.static(path.resolve(__dirname, "../public")));

    // onboarding routes (login, ...)
    registerOnboardingRoutes(app);

    // authenticated routes
    registerAuthenticatedRoutes(app);

    // fallback route, return our own 404 instead of default
    app.use((req: Request, res: Response, next: NextFunction) => {
        next(new NotFoundError());
    });
};

export { registerRoutes };
