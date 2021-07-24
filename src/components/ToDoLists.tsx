import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { TodoListGen, RemoveList, CheckToDo } from "../store/Todolist.store"
import Buttons from "./Button"

const ToDos: React.VFC = () => {
  const ToDoList = useSelector(TodoListGen)

  const dispatch = useDispatch()
  // useEffect(() => {
  //   return () => {
  //     dispatch(SetAppBarName("DODO List"))
  //   }
  // }, [])
  return (
    <>
      {ToDoList.map((value, index) => {
        return (
          <>
            <div
              className="border-2 border-gray-300 rounded-md mt-2 p-4 border-opacity-100 flex shadow"
              key={index}
            >
              <input
                checked={value.Done}
                // color="primary"
                className="self-center"
                onChange={(e) => {
                  console.log(e.target.checked)
                  dispatch(CheckToDo({ Done: e.target.checked, Number: index }))
                }}
                type="checkbox"
              />
              <h2
                className={
                  "text-xl text-black  p-2  transition duration-200 " +
                  (value.Done ? "line-through text-gray-500	" : "")
                }
              >
                {value.Name}
              </h2>
              <div className="flex-auto "></div>
              <Buttons>ぼたん</Buttons>
              <button
                className="focus:ring-4 mt-2 p-4 rounded-md  transition duration-150 focus:ring-indigo-300 bg-indigo-600 w-20 mx-2"
                onClick={() => {
                  console.log("削除", index)
                  dispatch(RemoveList(index))
                }}
              >
                削除
              </button>
            </div>
          </>
        )
      })}
    </>
  )
}

export default ToDos
