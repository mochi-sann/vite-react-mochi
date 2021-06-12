import React from "react"
import { Helmet } from "react-helmet"

const testPage: React.VFC = () => {
  return (
    <>
      {" "}
      <Helmet>
        <title>テストページのタイトル</title>
      </Helmet>
      <p>てきすと</p>
    </>
  )
}

export default testPage
