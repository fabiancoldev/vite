const API_URL = 'http://localhost:3000/recetas';

// Obtener todas las recetas
export const getRecetas = async () => {
  const response = await fetch(API_URL);
  return await response.json();
};

// Obtener una receta por ID
export const getRecetaById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return await response.json();
};

// Buscar recetas por nombre
export const searchRecetasByNombre = async (nombre) => {
  const response = await fetch(`${API_URL}?nombre=${nombre}`);
  return await response.json();
};

// Crear una nueva receta
export const createReceta = async (receta) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(receta),
  });
  return await response.json();
};

// Actualizar una receta existente
export const updateReceta = async (id, receta) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(receta),
  });
  return await response.json();
};

// Inactivar una receta
export const inactivateReceta = async (id) => {
  const response = await fetch(`${API_URL}/${id}/inactivar`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
  });
  return await response.json();
};

// Eliminar una receta
export const deleteReceta = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
};