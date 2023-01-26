import { atom } from 'recoil'

const textState = atom({
  key: 'textState',
  default: '',
});

const todoListState = atom({
  key: 'todoListState',
  default: [],
});

const lastIdState = atom({
  key: 'lastIdState',
  default: 0,
})

export { textState, todoListState, lastIdState }