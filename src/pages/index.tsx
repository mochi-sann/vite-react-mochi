import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { Helmet } from "react-helmet"
import { SiAddthis } from "react-icons/si"

import { AddList } from "../store/Todolist.store"
import { SetAppBarName, TitleGen } from "../store/Title.store"
import ToDoLists from "../components/ToDoLists"

const ToDo: React.VFC = () => {
  const SiteTitle = useSelector(TitleGen)
  const [InputValue, setInputValue] = useState("")

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(SetAppBarName("TODO List in Redux"))
  }, [])
  return (
    <div>
      <Helmet>
        <title>{SiteTitle.Name || "Todoりすと"}</title>
      </Helmet>

      <div className="flex space-x-4">
        <input
          className=" flex-1 appearance-none border border-transparent w-full py-2 px-4 bg-white text-gray-900 placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none focus:ring-4 focus:ring-indigo-300  focus:border-transparent 	border border-gray-400 transition  duration-200"
          id="outlined-basic "
          onChange={(e) => {
            setInputValue(e.target.value)
          }}
          placeholder="TODOリストを追加"
          value={InputValue}
        />

        <button
          className="bg-white transition text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
          onClick={() => {
            if (!InputValue) {
              return
            }
            dispatch(AddList(InputValue))
            console.log(InputValue)
            setInputValue("")
          }}
        >
          <span className="mr-2">add</span>
          <SiAddthis />
        </button>
      </div>
      <ToDoLists />
    </div>
  )
}

export default ToDo
