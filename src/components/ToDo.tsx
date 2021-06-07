import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import { TodoListGen, AddList, RemoveList } from "../store/Todolist.store"

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    marginTop: "8px"
  }
})
const ToDo: React.VFC = () => {
  const ToDoList = useSelector(TodoListGen)
  const [InputValue, setInputValue] = useState("")
  const classes = useStyles()

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
        <Button
          className={
            classes.root +
            " focus:ring-4 w-full  p-4 rounded-md  transition duration-150  bg-indigo-600	"
          }
          color="primary"
          onClick={() => {
            if (!InputValue) {
              return
            }
            dispatch(AddList(InputValue))
            console.log(InputValue)
            setInputValue("")
          }}
          size="large"
          variant="contained"
        >
          追加
        </Button>
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
