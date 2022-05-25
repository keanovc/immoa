const AuthRoutes = {
    Index: "/auth",
    Signin: "/auth/signin",
    Signup: "/auth/signup",
};

const HomeRoutes = {
    Index: "/",
    Buy: "/buy",
    Rent: "/rent",
    Contact: "/contact",
    Detail: "/detail/:id",
};

const ProfileRoutes = {
    Index: "/profile",
    Favorites: "/profile/favorites",
    Edit: "/profile/edit",
};

const AdminRoutes = {
    Index: "/admin",
    Users: "/admin/users",
    EditUser: "/admin/users/:id",
    AddUser: "/admin/users/add",
    Properties: "/admin/properties",
    EditProperty: "/admin/properties/:id",
    AddProperty: "/admin/properties/add",
    Realtors: "/admin/realtors",
};

// replaces : values with values from object
// e.g. route('/projects/:id', { id : 9 }) -> /projects/9
export const route = (path, options = {}) => {
    Object.keys(options).forEach((key) => {
        path = path.replace(`:${key}`, options[key]);
    });
    return path;
};

export { AuthRoutes, HomeRoutes, ProfileRoutes, AdminRoutes };
