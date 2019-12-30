import React from "react";
import { Table } from "reactstrap";

function CryptoInfoTable(props) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Exchange ID</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
        {props.infos.map(item => (
          <tr key={item.exchange_id}>
            <td>{item.name}</td>
            <td>{item.exchange_id}</td>
            <td><a href={item.website} target="_blank" rel="noopener noreferrer">{item.website}</a></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default CryptoInfoTable;
