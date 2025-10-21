import type { Property } from "../models/Property.ts";

type PropertyFormProps = {
    property?: Property;
};

export default function PropertyTable({ property }: PropertyFormProps) {
    return (
        <form>
            <input
                type="text"
                placeholder="Title"
                value={property?.title ?? ""}
            />
            <input
                type="text"
                placeholder="Address"
                value={property?.address ?? ""}
            />
            <input
                type="text"
                placeholder="Status"
                value={property?.status ?? ""}
            />
            <button type="submit">
                Salvar
            </button>
        </form>
    );
}
