import { useEffect, useState } from "react";
import type { Property } from "../models/Property.ts";
import propertyGetterService from "../services/PropertiesGetterService.ts";

export default function PropertiesTable() {
    const [properties, setProperties] = useState<Property[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const values = await propertyGetterService.getAll();
                setProperties(values);
            } catch (err) {
                console.error("Unknown error: ", err);
            }
        }

        fetchData();
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Endereço</th>
                    <th>Status</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {properties.map(property => (
                    <tr key={property.id}>
                        <td>
                            {property.id}
                        </td>
                        <td>
                            {property.title}
                        </td>
                        <td>
                            {property.address}
                        </td>
                        <td>
                            {property.status}
                        </td>
                        <td>
                            <button style={{ marginRight: 8 }}>
                                Editar
                            </button>
                            <button>
                                Excluir
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
