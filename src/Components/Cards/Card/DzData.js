import React from "react";
import reactDom from "react-dom";
import Cards from "../Cards";
import { fetchDataDZ } from "../../../Api/index";

class DataDz extends React.Component {
  state = {
    dataDZ: {},
  };

  async componentDidMount() {
    const dataDZ = await fetchDataDZ();

    this.setState({ dataDZ });
  }

  handleCountryChange = async () => {
    const dataDZ = await fetchDataDZ();

    this.setState({ dataDZ });
  };

  render() {
    const { dataDZ } = this.state;

    return (
      <div>
        <Cards data={dataDZ} />
      </div>
    );
  }
}

export default DataDz;
