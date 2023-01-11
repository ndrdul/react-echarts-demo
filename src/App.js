//https://medium.com/@noffybarudwale/simple-way-to-use-echart-in-react-9c4267ab4a95
// src/App.js
import React from "react";
import ReactEcharts from "echarts-for-react";

import Echart from "./components/Echart";

function App() {
  // const option = {
  //   xAxis: {
  //     type: "category",
  //     data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  //   },
  //   yAxis: {
  //     type: "value",
  //   },
  //   series: [
  //     {
  //       data: [120, 200, 150, 80, 70, 110, 130],
  //       type: "bar",
  //     },
  //   ],
  // };
  // return <ReactEcharts option={option} />;
  return (
    <div><Echart /></div>
  )
}
export default App;


//https://echarts.apache.org/examples/data/asset/data/echarts-package-size.json