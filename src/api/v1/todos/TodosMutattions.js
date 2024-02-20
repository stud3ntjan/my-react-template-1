import api from "../../config/api";

async function createTodo(newTodo) {
  try {
    const result = await api.post("/todos/create", {
      newTodo: newTodo,
    });
    const todos = result.data;
    return todos;
  } catch (error) {
    console.error("Fehler beim erstellen eines ToDo's:", error);
    throw error;
  }
}

export default { createTodo };
