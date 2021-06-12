import React from "react"

import AppBar from "@material-ui/core/AppBar"
import Typography from "@material-ui/core/Typography"

export type Props = {
  children: React.ReactNode
}

const Layout: React.VFC<Props> = (props) => {
  return (
    <div className="bg-gray-900	min-h-screen">
      <AppBar>
        <Typography variant="h3">テキスト</Typography>
      </AppBar>
      <div className="max-w-screen-md	m-auto text-white">{props.children}</div>
    </div>
  )
}

export default Layout
