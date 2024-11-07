import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  [
    "",
    "",
    { role: "style" },
    {
      role: "annotation",
    },
  ],
  ["Your offset", 8.94, "#486BAF", null],
  ["country annual footprint", 10.49, "#86AF47", null],
  ["global annual footprint", 19.3, "#A24F78", null],
];

export const options = {
  width: 500,
  height: 250,
  bar: { groupWidth: "70%" },
  // title: "Compare your offset to annual averages",
  legend: { position: "none" },
};

const ImpactCo2 = (props: any) => {
  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="250px"
      data={props.data}
      options={options}
      className="Chart_Head"
      legendToggle
    />
  );
};

export default ImpactCo2;
