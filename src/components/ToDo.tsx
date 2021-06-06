import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { TodoListGen, AddList, RemoveList } from "../store/Todolist.store"

const ToDo: React.VFC = () => {
  const ToDoList = useSelector(TodoListGen)
  const [InputValue, setInputValue] = useState("")

  const dispatch = useDispatch()

  return (
    <div>
      <p>TODO</p>
      <div>
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
      {ToDoList.map((value, index) => {
        return (
          <>
            <div
              className="border-4 border-gray-800 mt-2 py-4 border-opacity-100 flex"
              key={index}
            >
              <h2 className="text-xl p-2">{value.Name}</h2>
              <div className="flex-auto "></div>
              <button
                className="focus:ring-4 mt-2 p-4 rounded-md  transition duration-150 focus:ring-indigo-300 bg-indigo-600 w-20 mx-2"
                onClick={() => {
                  console.log("削除", index)
                  dispatch(RemoveList(index))
                }}
              >
                完了
              </button>
            </div>
          </>
        )
      })}
    </div>
  )
}

export default ToDo
