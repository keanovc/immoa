import Agency from "../Agency/Agency.entity";

export interface PropertyBody {
    zipCode: string;
    address: string;
    city: string;
    price: number;
    rooms: number;
    bathrooms: number;
    area: number;
    description: string;
    image?: string | null;
    type: string;
    bor: string;
    sold: string;
    agency?: Agency;
    agencyId: number;
}
