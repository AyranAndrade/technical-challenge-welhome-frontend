import React, { useState } from "react";

type Entity = {
  id: number;
  name: string;
  description: string;
};

export default function App() {
  const [entities, setEntities] = useState<Entity[]>([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) return;

    if (editingId !== null) {
      setEntities((prev) =>
        prev.map((ent) =>
          ent.id === editingId ? { ...ent, name, description } : ent
        )
      );
      setEditingId(null);
    } else {
      const newEntity: Entity = {
        id: Date.now(),
        name,
        description,
      };
      setEntities((prev) => [...prev, newEntity]);
    }

    setName("");
    setDescription("");
  };

  const handleEdit = (id: number) => {
    const entity = entities.find((e) => e.id === id);
    if (entity) {
      setName(entity.name);
      setDescription(entity.description);
      setEditingId(id);
    }
  };

  const handleDelete = (id: number) => {
    setEntities((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>CRUD Simples</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <div>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: 8, marginBottom: 8 }}
          />
        </div>
        <div>
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: "100%", padding: 8, marginBottom: 8 }}
          />
        </div>
        <button type="submit" style={{ padding: "8px 16px" }}>
          {editingId ? "Salvar" : "Adicionar"}
        </button>
      </form>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "left",
        }}
      >
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ccc", padding: 8 }}>ID</th>
            <th style={{ borderBottom: "1px solid #ccc", padding: 8 }}>Nome</th>
            <th style={{ borderBottom: "1px solid #ccc", padding: 8 }}>
              Descrição
            </th>
            <th style={{ borderBottom: "1px solid #ccc", padding: 8 }}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {entities.length === 0 ? (
            <tr>
              <td colSpan={4} style={{ padding: 8, textAlign: "center" }}>
                Nenhum registro.
              </td>
            </tr>
          ) : (
            entities.map((entity) => (
              <tr key={entity.id}>
                <td style={{ borderBottom: "1px solid #eee", padding: 8 }}>
                  {entity.id}
                </td>
                <td style={{ borderBottom: "1px solid #eee", padding: 8 }}>
                  {entity.name}
                </td>
                <td style={{ borderBottom: "1px solid #eee", padding: 8 }}>
                  {entity.description}
                </td>
                <td style={{ borderBottom: "1px solid #eee", padding: 8 }}>
                  <button
                    onClick={() => handleEdit(entity.id)}
                    style={{ marginRight: 8 }}
                  >
                    Editar
                  </button>
                  <button onClick={() => handleDelete(entity.id)}>
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
