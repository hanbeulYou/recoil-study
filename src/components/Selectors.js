import { selector } from "recoil";
import { textState } from './Atoms'

const charCountState = selector({
  key: 'charCountState',
  get: ({get}) => {
    const text = get(textState);

    return text.length;
  }
})

export { charCountState }