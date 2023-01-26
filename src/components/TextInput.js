import {textState} from './Atoms'
import { useRecoilState } from 'recoil';

export default function TextInput() {
  const [text, setText] = useRecoilState(textState)
  const onChange = (e) => {
    setText(e.target.value);
  }
  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br/>
      Echo : {text}
    </div>
  );
}
