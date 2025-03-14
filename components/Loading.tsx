"use client"
import { Grid } from "react-loader-spinner"
import Breadcrumb from "./Breadcrumb"

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="w-1/3">
        <Grid
          visible={true}
          height="200"
          width="200"
          color="#ccc"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass="grid-wrapper"
        />
      </div>
    </div>
  )
}

export default Loading
