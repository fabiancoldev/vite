
const API_URL = 'http://localhost:3000/recetas/';

export const getRecetas = async () => {
  const response = await fetch(API_URL);
  return await response.json();
};

export const createReceta = async (receta) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(receta),
  });
  return await response.json();
};

export const updateReceta = async (id, receta) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(receta),
  });
  return await response.json();
};

export const deleteReceta = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
};
