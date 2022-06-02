import Agency from "../Agency/Agency.entity";

export interface PropertyBody {
    zipCode: string;
    address: string;
    city: string;
    minPrice: number;
    maxPrice: number;
    rooms: number;
    bathrooms: number;
    area: number;
    description: string;
    image: string;
    type: string;
    agency: Agency;
}
