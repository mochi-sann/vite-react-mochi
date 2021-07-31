import React from "react"

export type Props = { text: string; done: boolean }
import styled from "styled-components"

const Button = styled.button`
  color: #1d1d1d;
  background-color: #80d6ff;
  cursor: pointer;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;

  /* border: 2px solid #000000; */
  border-radius: 3px;
  transition: 100ms ease-in-out;
  :hover {
    background-color: #51a6eb;
  }
`

const RecoilToDos: React.VFC<Props> = (props) => {
  return (
    <div className="flex space-x-4 w-full border border-gray-500 mt-2 rounded-md">
      <p
        className={
          "text-xl text-black  p-2  transition duration-200 flex-grow leading-6 text-justify overflow-clip w-full break-all " +
          (props.done ? "line-through text-gray-500	" : "")
        }
      >
        {props.text}
      </p>

      <Button className="flex-shrink-0">削除するねん</Button>
    </div>
  )
}

export default RecoilToDos
