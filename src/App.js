import {RecoilRoot} from 'recoil'  
import CharacterCounter from './components/Counter/CharacterCounter';
import TodoList from './components/TodoList/TodoList'

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
