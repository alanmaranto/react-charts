import React, { Component } from "react";
import Chart from "./Chart";
import chartData from "../data/chartData";

const initialState = {
  chartData: {},
};

class ChartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.setState({
      chartData,
    });
  };

  render() {
    const { chartData } = this.state;
    return <Chart chartData={chartData} location="New York" legendPosition="bottom" />;
  }
}

export default ChartContainer;
