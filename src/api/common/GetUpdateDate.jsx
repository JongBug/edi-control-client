import React from "react";
import { Input, Button, Container, Table } from "react-materialize";
import BASEAPI from "../../api/common/BaseApi";

export default class GetUpdateDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { resData: [] };
  }

  findByUpdateDate = event => {
    event.preventDefault();
    BASEAPI.get(
      `${this.props.data.sub}/all/${this.props.data.year}/${
        this.props.data.week
      }/${this.props.data.updateDate}`
    ).then(res => {
      this.setState({ resData: res.data });
      console.log(this.state.resData[0].siteId);
    });
  };

  onChangeUpdate = event => {
    this.props.data.updateDate = event.target.value;
  };

  render() {
    return (
      <div>
        <Input
          onChange={this.onChangeUpdate}
          s={3}
          type="select"
          label="Upload Date"
          defaultValue="1"
        >
          {this.props.data.updateDateList.map(f => (
            <option value={f}>{f}</option>
          ))}
        </Input>

        <div className="report-checkbox">
          <Input
            name="active"
            type="checkbox"
            value="active"
            label="Only Active Stores"
          />
        </div>
        <Button
          waves="light"
          className="panel-button"
          onClick={this.findByUpdateDate}
        >
          Submit
        </Button>
        <Table className="report-table">
          <thead>
            <tr>
              <th data-field="week">Store</th>
              <th data-field="week">Site Id</th>
              <th data-field="week">Week -10</th>
              <th data-field="week">Week -9</th>
              <th data-field="week">week -8</th>
              <th data-field="week">Week -7</th>
              <th data-field="week">Week -6</th>
              <th data-field="week">Week -5</th>
              <th data-field="week">Week -4</th>
              <th data-field="week">Week -3</th>
              <th data-field="week">Week -2</th>
              <th data-field="week">Week -1</th>
              <th data-field="week">AVG</th>
              <th data-field="week">V/AVG</th>
              <th data-field="week">V/PastWeek</th>
            </tr>
          </thead>
          <tbody>
            {this.state.resData.map(function(f) {
              return (
                <tr>
                  <td>{f.store}</td>
                  <td>{f.siteId}</td>
                  <td>{f.weekMinus10}</td>
                  <td>{f.weekMinus9}</td>
                  <td>{f.weekMinus8}</td>
                  <td>{f.weekMinus7}</td>
                  <td>{f.weekMinus6}</td>
                  <td>{f.weekMinus5}</td>
                  <td>{f.weekMinus4}</td>
                  <td>{f.weekMinus3}</td>
                  <td>{f.weekMinus2}</td>
                  <td>{f.weekMinus1}</td>
                  <td>{f.allAvg}</td>
                  <td>{f.varianceWithAvg}</td>
                  <td>{f.varianceWithPastW}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
