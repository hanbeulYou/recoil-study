import {RecoilRoot} from 'recoil'  
import CharacterCounter from './components/Counter/CharacterCounter';

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}

export default App;
