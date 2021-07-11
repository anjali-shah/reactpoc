import React from "react";
import BasicTable from "./Table";
import { callApi } from "../lib";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      row: [],
    };
  }

  getdetails = async () => {
    const result = await callApi("get", "/", "", {});
    const { data } = result;
    console.log("object", data);
    const { row } = this.state;
    this.setState({
      row: data,
    });
    console.log("object", row, this.state.row);

    return data;
  };

  componentWillMount() {
    console.log('Component WILL MOUNT!')
 }

  async componentDidMount() {
    this.getdetails();
  }
  render() {
    const { row } = this.state;
    console.log("-", row);
    return (
      <>
<p>List of the users</p>
        {row.length ? <BasicTable rows={row} /> : null}
      </>
    );
  }
}

export default List;
