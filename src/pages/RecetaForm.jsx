
import { useState, useEffect } from 'react';
import { getRecetas, createReceta, updateReceta, deleteReceta } from '../services/RecetaServices.js';

const RecetaForm = () => {
  const [recetas, setRecetas] = useState([]);
  const [formData, setFormData] = useState({
    nombre: '',
    ingredientes: '',
    instrucciones: '',
    estado: 'Activa',
    categoria: '',
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    loadRecetas();
  }, []);

  const loadRecetas = async () => {
    const data = await getRecetas();
    setRecetas(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      await updateReceta(editingId, formData);
    } else {
      await createReceta(formData);
    }

    setFormData({
      nombre: '',
      ingredientes: '',
      instrucciones: '',
      estado: 'Activa',
      categoria: '',
    });
    setEditingId(null);
    loadRecetas();
  };

  const handleEdit = (receta) => {
    setFormData(receta);
    setEditingId(receta._id);
  };

  const handleDelete = async (id) => {
    await deleteReceta(id);
    loadRecetas();
  };

  return (
    <div className="container">
      <h1>Gestión de Recetas</h1>

      {/* Formulario */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Ingredientes:</label>
          <textarea
            name="ingredientes"
            value={formData.ingredientes}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Instrucciones:</label>
          <textarea
            name="instrucciones"
            value={formData.instrucciones}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Estado:</label>
          <select name="estado" value={formData.estado} onChange={handleChange}>
            <option value="Activa">Activa</option>
            <option value="Inactiva">Inactiva</option>
          </select>
        </div>
        <div>
          <label>Categoría:</label>
          <input
            type="text"
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">{editingId ? 'Actualizar' : 'Guardar'}</button>
        {editingId && <button onClick={() => setEditingId(null)}>Cancelar</button>}
      </form>

      <hr />

      {/* Lista de recetas */}
      <h2>Lista de Recetas</h2>
      <ul>
        {recetas.map((receta) => (
          <li key={receta._id}>
            <strong>{receta.nombre}</strong> - {receta.categoria} - {receta.estado}
            <br />
            <button onClick={() => handleEdit(receta)}>Editar</button>
            <button onClick={() => handleDelete(receta._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecetaForm;
