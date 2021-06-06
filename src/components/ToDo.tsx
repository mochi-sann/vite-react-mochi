import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { TodoListGen, AddList } from "../store/Todolist.store"

const ToDo: React.VFC = () => {
  const ToDoList = useSelector(TodoListGen)
  const [InputValue, setInputValue] = useState("")

  const dispatch = useDispatch()

  return (
    <div>
      <p>TODO</p>
      {ToDoList.map((value, index) => {
        return (
          <>
            <div className="border-4 border-gray-800 my-2 py-4 border-opacity-100">
              <h2 className="text-xl	">{value.Name}</h2>
            </div>{" "}
          </>
        )
      })}

      <input
        className="text-black w-full	"
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        type="text"
        value={InputValue}
      />
      <button
        className="focus:ring-4 w-full mt-2 p-4 rounded-md  transition duration-150 focus:ring-indigo-300 bg-indigo-600	"
        onClick={() => {
          dispatch(AddList(InputValue))
          console.log(InputValue)
          setInputValue("")
        }}
      >
        追加
      </button>
    </div>
  )
}

export default ToDo
