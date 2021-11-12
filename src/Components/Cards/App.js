import React from "react";
import reactDom from "react-dom";
import Cards from "./Cards";
import { fetchData, fetchDataDZ } from "../../Api/index";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div>
        <Cards data={data} />
      </div>
    );
  }
}

export default App;
