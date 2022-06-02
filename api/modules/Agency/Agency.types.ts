import Property from "../Property/Property.entity";
import User from "../User/User.entity";

export interface AgencyBody {
    name: string;
    description: string;
    address: string;
    zipCode: string;
    city: string;
    phone: string;
    properties: Property[];
    users: User[];
}