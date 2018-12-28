import React from "react";
import GetUpdateDate from "../../api/common/GetUpdateDate";
import BASEAPI from "../../api/common/BaseApi";
import { Row, Input, Table, Container, Button } from "react-materialize";

class PsiReportModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sub: "seda",
      year: "2018",
      week: "1",
      updateDate: "",
      updateDateList: [],
      onlyActive: false
    };
  }
  getUpdateList() {
    BASEAPI.get(
      `${this.state.sub}/all/${this.state.year}/${this.state.week}`
    ).then(res => {
      this.setState({
        sub: this.state.sub,
        year: this.state.year,
        week: this.state.week,
        updateDateList: res.data,
        updateDate: res.data[0],
        onlyActive: this.state.onlyActive
      });
    });
  }

  componentWillMount() {
    this.getUpdateList();
  }

  onSubSelect = event => {
    this.state.sub = event.target.value;
    this.getUpdateList();
  };

  onWeekSelect = event => {
    this.state.week = event.target.value;
    this.getUpdateList();
  };

  onYearSelect = event => {
    this.state.year = event.target.value;
    this.getUpdateList();
  };

  render() {
    let updateDateInput = <GetUpdateDate data={this.state} />;
    return (
      <Row className="report-panel">
        <Input
          onChange={this.onSubSelect}
          s={2}
          type="select"
          label="Subsidiary"
          defaultValue="1"
        >
          <option value="seda">SEDA</option>
          <option value="sepr">SEPR</option>
          <option value="samcol">SAMCOL</option>
        </Input>
        <Input
          onChange={this.onYearSelect}
          s={1}
          type="select"
          label="Year"
          defaultValue="1"
        >
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2020">2021</option>
          <option value="2020">2022</option>
        </Input>
        <Input
          onChange={this.onWeekSelect}
          s={2}
          type="select"
          label="Nº of Week"
          defaultValue="1"
        >
          <option value="1"> 1 </option>
          <option value="2"> 2 </option>
          <option value="3"> 3 </option>
          <option value="4"> 4 </option>
          <option value="5"> 5 </option>
          <option value="6"> 6 </option>
          <option value="7"> 7 </option>
          <option value="8"> 8 </option>
          <option value="9"> 9 </option>
          <option value="10"> 10 </option>
          <option value="11"> 11 </option>
          <option value="12"> 12 </option>
          <option value="13"> 13 </option>
          <option value="14"> 14 </option>
          <option value="15"> 15 </option>
          <option value="16"> 16 </option>
          <option value="17"> 17 </option>
          <option value="18"> 18 </option>
          <option value="19"> 19 </option>
          <option value="20"> 20 </option>
          <option value="21"> 21 </option>
          <option value="22"> 22 </option>
          <option value="23"> 23 </option>
          <option value="24"> 24 </option>
          <option value="25"> 25 </option>
          <option value="26"> 26 </option>
          <option value="27"> 27 </option>
          <option value="28"> 28 </option>
          <option value="29"> 29 </option>
          <option value="30"> 30 </option>
          <option value="31"> 31 </option>
          <option value="32"> 32 </option>
          <option value="33"> 33 </option>
          <option value="34"> 34 </option>
          <option value="35"> 35 </option>
          <option value="36"> 36 </option>
          <option value="37"> 37 </option>
          <option value="38"> 38 </option>
          <option value="39"> 39 </option>
          <option value="40"> 40 </option>
          <option value="41"> 41 </option>
          <option value="42"> 42 </option>
          <option value="43"> 43 </option>
          <option value="44"> 44 </option>
          <option value="45"> 45 </option>
          <option value="46"> 46 </option>
          <option value="47"> 47 </option>
          <option value="48"> 48 </option>
          <option value="49"> 49 </option>
          <option value="50"> 50 </option>
          <option value="51"> 51 </option>
          <option value="52"> 52 </option>
        </Input>

        {updateDateInput}
      </Row>
    );
  }
}

export default PsiReportModal;
