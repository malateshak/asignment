import React,{ Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
//import './node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { connect } from 'react-redux';


class DashBoard extends Component {
  render () {
    return (
      <div>
        <h3 style={{ marginTop: 40, textAlign: 'center', color: 'blue' }}>Employee List</h3>
        <div style={{ margin : 80}}>
          <BootstrapTable data={this.props.data} pagination search filterFormatted>
            <TableHeaderColumn isKey dataField='id'> ID</TableHeaderColumn>
            <TableHeaderColumn dataSort={true} dataField='name'> Name</TableHeaderColumn>
            <TableHeaderColumn dataSort={true} dataField='age'>Age</TableHeaderColumn>
            <TableHeaderColumn dataField='gender'>Gender</TableHeaderColumn>
            <TableHeaderColumn dataSort={true} dataField='email'>Email</TableHeaderColumn>
            <TableHeaderColumn dataField='phoneNo'>Phone No.</TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
    );
  }
}

  const mapStateToProps = (state) => {
    return {
      data: state.DashBoardData.data
    }
  }

export default connect(mapStateToProps, null) (DashBoard);
