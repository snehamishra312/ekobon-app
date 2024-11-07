import React from "react";
import { Chart } from "react-google-charts";

import "../IndvAddToCart/indvAddtoCart.css";
export const options = {
  pieHole: 0.8,
  is3D: false,
  pieSliceText: "none",
  colors10: ["#486BAD", "#83B049", "#AD497F", "#F4940A"],
};

export default function ProjectDistribution(props: any) {
  const Chartdata = props?.data;
  const currencyAndSumStyle = (symbol: any, sum: any) => {
    let symbolLength = symbol?.length || 0;
    let sumLenght = sum?.toString()?.length || 0;
    let total = +symbolLength + +sumLenght;
    if (total <= 3) {
      return "projectDistribution-length-default-ns projectDistribution-length-one-ns";
    }
    if (total > 3 && total <= 5) {
      return "projectDistribution-length-default-ns projectDistribution-length-two-ns";
    }
    if (total == 6) {
      return "projectDistribution-length-default-ns projectDistribution-length-three-ns";
    }
    if (total == 7) {
      return "projectDistribution-length-default-ns projectDistribution-length-four-ns";
    }
    if (total == 8) {
      return "projectDistribution-length-default-ns projectDistribution-length-five-ns";
    }
    if (total == 9) {
      return "projectDistribution-length-default-ns projectDistribution-length-six-ns";
    }
    return "projectDistribution-length-default-ns projectDistribution-length-seven-ns";
  };
  return (
    <div
      className="indi_donut_chart"
      style={{
        position: "relative",
      }}
    >
      <Chart
        chartType="PieChart"
        width="100%"
        height="auto"
        data={Chartdata}
        options={options}
      />
      {props?.sum !== 0 && (
        <p className={currencyAndSumStyle(props?.currency, props?.sum)}>
          {props?.currency}
          {props?.sum}
        </p>
      )}
    </div>
  );
}
