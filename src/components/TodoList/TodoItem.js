import { useRecoilState } from "recoil"
import { todoListState } from "../Atoms"

export default function TodoItem({item}) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const idx = todoList.findIndex((listItem) => listItem === item);

  const editItmeText = ({target: {value}}) => {
    const newList = replaceItemAtIdx(todoList, idx, {...item, text:value});
    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIdx(todoList, idx, {...item, isComplete: !item.isComplete});
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIdx(todoList, idx);
    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItmeText}/>
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  )
}

function replaceItemAtIdx(arr, idx, newValue) {
  return [...arr.slice(0, idx), newValue, ...arr.slice(idx+1)]
}

function removeItemAtIdx(arr, idx) {
  return [...arr.slice(0, idx), ...arr.slice(idx+1)]
}