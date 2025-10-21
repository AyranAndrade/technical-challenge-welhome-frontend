import { useState, useEffect } from "react";
import PropertyTable from "../components/PropertyTable.tsx";
import type { Property } from "../models/Property.ts";
import propertyGetterService from "../services/PropertiesGetterService.ts";
import PropertyForm from "../components/PropertyForm.tsx";

export default function App() {
    const [properties, setProperties] = useState<Property[]>([]);

    useEffect(() => {
        propertyGetterService.getAll().then(setProperties);
    }, []);

    return (
        <div>
            <h2>Formulário</h2>
            <PropertyForm />

            <h2>Lista de Propriedades</h2>
            <PropertyTable properties={properties} />
        </div>
    );
}
