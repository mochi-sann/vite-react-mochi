import { atom } from "recoil"

type TodoLists = {
  Name: string
  Done: boolean
}

export const TodoListState = atom<TodoLists[]>({
  key: "TodoListState", // unique ID (with respect to other atoms/selectors)
  default: [{ Name: "やること", Done: false }] // default value (aka initial value)
})
