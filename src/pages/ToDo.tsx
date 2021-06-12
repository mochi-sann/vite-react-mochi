import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
// import { Button as BootStrapButton } from "react-bootstrap"
import Box from "@material-ui/core/Box"
import { Helmet } from "react-helmet"
import { Checkbox } from "@material-ui/core"
import {
  TodoListGen,
  AddList,
  RemoveList,
  CheckToDo
} from "../store/Todolist.store"
import { SetAppBarName, TitleGen } from "../store/Title.store"

const useStyles = makeStyles({
  root: {
    background: "linear-gradient( 135deg, #52E5E7 10%, #130CB7 100%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px #130CB766",
    // color: "white",
    height: 48,
    padding: "0 30px",
    marginTop: "20px"
  }
})
const ToDo: React.VFC = () => {
  const ToDoList = useSelector(TodoListGen)
  const SiteTitle = useSelector(TitleGen)
  const [InputValue, setInputValue] = useState("")
  const classes = useStyles()

  const dispatch = useDispatch()

  dispatch(SetAppBarName("DODO List"))
  return (
    <div>
      <Helmet>
        <title>{SiteTitle.Name || "Todoりすと"}</title>
      </Helmet>
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
            <Box
              className="border-4 border-gray-800 mt-2 p-4 border-opacity-100 flex"
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
                  "text-xl text-black  p-2  " +
                  (value.Done ? "line-through" : "")
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
    </div>
  )
}

export default ToDo
