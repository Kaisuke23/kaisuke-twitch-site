import React, { Component } from 'react';
import {BootstrapTable,
       TableHeaderColumn} from 'react-bootstrap-table';

class Table extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey dataField='command'>
            Command
          </TableHeaderColumn>
          <TableHeaderColumn dataField='description'>
            Description
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Table;
