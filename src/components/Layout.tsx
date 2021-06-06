import React from "react"

export type Props = {
  children: React.ReactNode
}

const Layout: React.VFC<Props> = (props) => {
  return (
    <div className="bg-gray-900	min-h-screen">
      <div className="max-w-screen-md	m-auto text-white">{props.children}</div>
    </div>
  )
}

export default Layout
