import type { Property } from "../models/Property.ts";
import axios from 'axios';

const propertyGetterService = {
    async getAll() : Promise<Property[]> {
        const url = `${import.meta.env.VITE_BASE_URL}/properties/`;

        const response = await axios.get<Property[]>(url);

        return response.data.map((item: any) => ({
            id: item.id,
            title: item.title,
            address: item.address,
            status: item.status,
        }));
    },
};

export default propertyGetterService;