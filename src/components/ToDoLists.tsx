import React from "react"
import { useSelector, useDispatch } from "react-redux"

import Box from "@material-ui/core/Box"

import { Checkbox } from "@material-ui/core"
import { TodoListGen, RemoveList, CheckToDo } from "../store/Todolist.store"

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
            <Box
              className="border-4 border-gray-800 mt-2 p-4 border-opacity-100 flex shadow"
              key={index}
            >
              <Checkbox
                checked={value.Done}
                color="primary"
                onChange={(e) => {
                  console.log(e.target.checked)
                  dispatch(CheckToDo({ Done: e.target.checked, Number: index }))
                }}
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
              <button
                className="focus:ring-4 mt-2 p-4 rounded-md  transition duration-150 focus:ring-indigo-300 bg-indigo-600 w-20 mx-2"
                onClick={() => {
                  console.log("削除", index)
                  dispatch(RemoveList(index))
                }}
              >
                削除
              </button>
            </Box>
          </>
        )
      })}
    </>
  )
}

export default ToDos
