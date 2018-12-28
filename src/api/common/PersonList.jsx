import React from "react";

import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    updateDate: []
  };

  componentDidMount() {
    axios.get("http://localhost:8010/sepr/all/2018/51").then(res => {
      console.log(res);
      console.log(res.data);
      const updateDate = res.data;
      this.setState({ updateDate });
    });
  }

  render() {
    return (
      <ul>
        {this.state.updateDate.map(updateDate => (
          <li>{updateDate}</li>
        ))}
        <li />
      </ul>
    );
  }
}
