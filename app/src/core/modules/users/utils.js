import { UserRoles } from "./constants";

const formatName = (user) => {
    return `${user.name} ${user.surname}`;
};

const formatPrice = (price) => {
    return `$ ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
};

const isAdmin = (user) => {
    return user.role === UserRoles.Admin;
};

const isRealtor = (user) => {
    return user.role === UserRoles.Realtor;
};

export { isAdmin, formatName, formatPrice, isRealtor };