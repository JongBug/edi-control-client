import React from "react";
import { Row } from "react-materialize";
import PsiReportModal from "./PsiReportModal";

class PsiReport extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isLoggedIn: false, rows: [] };
  }
  handleClick() {
    this.setState({ isLoggedIn: true, rows: this.state.rows });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <PsiReportModal onClick={this.handleClick} />;
      this.state.rows.push(<PsiReportModal />);
    }

    return (
      <div>
        <Row>
          <Row>
            <a onClick={this.handleClick}>
              <div className="col s12">
                <div className="card blue-grey darken-1">
                  <div className="card-content white-text">
                    <span className="card-title panel">
                      <Row>
                        <div className="col s10">Add Report Panel</div>
                        <div className="col s2">
                          <i className="medium material-icons">add_circle</i>
                        </div>
                      </Row>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </Row>
        </Row>

        {this.state.rows.map(function(f) {
          return <div>{f}</div>;
        })}
      </div>
    );
  }
}

export default PsiReport;
