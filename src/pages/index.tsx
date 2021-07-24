import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"

import { Helmet } from "react-helmet"
import { TextField, Button } from "@material-ui/core"
import { AddList } from "../store/Todolist.store"
import { SetAppBarName, TitleGen } from "../store/Title.store"
import ToDoLists from "../components/ToDoLists"

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
  const SiteTitle = useSelector(TitleGen)
  const [InputValue, setInputValue] = useState("")
  // const classes = useStyles()

  const dispatch = useDispatch()
  useEffect(() => {
    return () => {
      dispatch(SetAppBarName("DODO List"))
    }
  }, [])
  return (
    <div>
      <Helmet>
        <title>{SiteTitle.Name || "Todoりすと"}</title>
      </Helmet>

      <div>
        <input
          className=" flex-1 appearance-none border border-transparent w-full py-2 px-4 bg-white text-gray-900 placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none focus:ring-4 focus:ring-indigo-300  focus:border-transparent ring-2	ring-gray-800 transition  duration-200"
          id="outlined-basic "
          // label="new TODO"
          onChange={(e) => {
            setInputValue(e.target.value)
          }}
          value={InputValue}
          // variant="outlined"
        />

        <button
          className="mt-4 focus:ring-4 w-full  p-4 rounded-md  transition duration-150  bg-green-500		"
          color="primary"
          onClick={() => {
            if (!InputValue) {
              return
            }
            dispatch(AddList(InputValue))
            console.log(InputValue)
            setInputValue("")
          }}
        >
          追加
        </button>
      </div>
      <ToDoLists />
    </div>
  )
}

export default ToDo
