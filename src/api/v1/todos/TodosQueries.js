import api from "../../config/api";

async function fetchAllTodos() {
  const result = await api.get("/todos/all");

  const todos = result.data;

  return todos;
}

async function fetchTodoById(todoId) {
  const result = await api.get("/todos/byid", { params: { todoId } });

  const todo = result.data.todo;

  return todo;
}

async function fetchTodosByUserId(userId) {
  const result = await api.get("/todos/byuserid", { params: { userId } });
  const todos = result.data;
  return todos;
}

async function markTodoAsCompleted(todoId) {
  const result = await api.put("/todos/mark", { todoId });
  const updatedTodo = result.data;
  return updatedTodo;
}

async function updateTodo(todoId, updatedTodoData) {
  const result = await api.put("/todos/update", { todoId, ...updatedTodoData });
  const updatedTodo = result.data;
  return updatedTodo;
}

async function deleteTodo(todoId) {
  const result = await api.delete("/todos/delete", { params: { todoId } });
  return result.data;
}

export default {
  fetchAllTodos,
  fetchTodoById,
  fetchTodosByUserId,
  markTodoAsCompleted,
  updateTodo,
  deleteTodo,
};
