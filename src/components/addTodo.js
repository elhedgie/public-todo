import { v4 as uuidv4 } from "uuid";

export default async function addTodo(todo) {
  return await { ...todo, id: uuidv4() };
}
