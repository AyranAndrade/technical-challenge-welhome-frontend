import type { Property } from "../models/Property.ts";

type PropertiesTableProps = {
    properties: Property[];
};

export default function PropertiesTable({ properties }: PropertiesTableProps) {
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
