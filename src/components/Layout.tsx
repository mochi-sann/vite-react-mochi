import React from "react"

import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
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
          <h1 className="font-bold text-3xl self-center px-4 w-full  text-left">
            {SiteTitle.AppBarName || "Home"}
          </h1>
          {/* <div className="w-full"></div> */}
          <div className="flex space-x-2 self-center ">
            <div className="text-blue-400 place-self flex">
              <Link className="self-center h-full" to="/">
                Redux
              </Link>
            </div>
            <div className="text-blue-400 self-center flex">
              <Link className="self-center h-full" to="/recoilTODO">
                recoilTODO
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-md	m-auto px-2">{props.children}</div>
    </div>
  )
}

export default Layout
