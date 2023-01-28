import { atom } from 'recoil'

const textState = atom({
  key: 'textState',
  default: '',
});

const todoListState = atom({
  key: 'todoListState',
  default: [],
});

const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All',
})

export { textState, todoListState, todoListFilterState }