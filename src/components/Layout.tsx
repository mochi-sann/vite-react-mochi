import React from "react"

import { useSelector } from "react-redux"
import { TitleGen } from "../store/Title.store"

export type Props = {
  children: React.ReactNode
  title?: string
}

const Layout: React.VFC<Props> = (props) => {
  const SiteTitle = useSelector(TitleGen)

  return (
    <div className="min-h-screen">
      <div className="bg-white mb-4 shadow   h-[55px]  px-full">
        <div className="max-w-screen-md h-full flex m-[auto]">
          <h1 className="font-bold text-3xl self-center px-4">
            {SiteTitle.AppBarName || "Home"}
          </h1>
        </div>
      </div>
      <div className="max-w-screen-md	m-auto px-2">{props.children}</div>
    </div>
  )
}

export default Layout
