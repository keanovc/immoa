const AuthRoutes = {
    Index: "/auth",
    Signin: "/auth/signin",
    Signup: "/auth/signup",
};

const HomeRoutes = {
    Index: "/",
    Buy: "/buy",
    Rent: "/rent",
    Properties: "/properties",
    PropertiesBuy: "/properties/buy",
    PropertiesRent: "/properties/rent",
    Contact: "/contact",
    Detail: "/detail/:id",
};

const ProfileRoutes = {
    Index: "/profile",
    Favorites: "/profile/favorites",
    Profile: "/profile/:id",
    EditProfile: "/profile/:id/edit",
};

const AgencyRoutes = {
    Index: "/agency",
    Properties: "/agency/properties",
    AddProperty: "/agency/properties/add",
    DetailProperty: "/agency/properties/:id",
    EditProperty: "/agency/properties/:id/edit",
};

const AdminRoutes = {
    Index: "/admin",
    Users: "/admin/users",
    AddUser: "/admin/users/add",
    DetailUser: "/admin/users/:id",
    EditUser: "/admin/users/:id/edit",
    Properties: "/admin/properties",
    DetailProperty: "/admin/properties/:id",
    EditProperty: "/admin/properties/:id/edit",
    AddProperty: "/admin/properties/add",
    Agencies: "/admin/agencies",
    AddAgency: "/admin/agencies/add",
    DetailAgency: "/admin/agencies/:id",
    EditAgency: "/admin/agencies/:id/edit",
};

// replaces : values with values from object
// e.g. route('/projects/:id', { id : 9 }) -> /projects/9
export const route = (path, options = {}) => {
    Object.keys(options).forEach((key) => {
        path = path.replace(`:${key}`, options[key]);
    });
    return path;
};

export { AuthRoutes, HomeRoutes, ProfileRoutes, AgencyRoutes, AdminRoutes };
