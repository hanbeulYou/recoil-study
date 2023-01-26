import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { lastIdState, todoListState } from "../Atoms";

function getId() {
  const nextId = lastId + 1;
  setLastId(nextId);
  return nextId;
}

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);
  const [lastId, setLastId] = useRecoilState(lastIdState);

  const addItem = async () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList, { id:lastId+1, text:inputValue, isComplete:false, }
    ])
  }
  return (
    <div></div>
  );
}