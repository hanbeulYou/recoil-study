import { useRecoilValue } from "recoil"
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";

export default function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <TodoItemCreator/>

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem}/>
      ))}
    </>
  )
}
