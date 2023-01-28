import { useRecoilValue } from "recoil"
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";
import { todoListState } from "../Atoms";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";

export default function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <TodoListStats/>
      <TodoListFilters/>
      <TodoItemCreator/>

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem}/>
      ))}
    </>
  )
}
