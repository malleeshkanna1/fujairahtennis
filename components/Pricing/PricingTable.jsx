import React from "react";
import TableStyle from "./css/Table.module.css";

const PricingTable = ({ tableData }) => {
  return (
    <div className="table-responsive">
      <table className={TableStyle["pricing-table"]}>
        <thead>
          <tr>
            {tableData.rows.map((data, i) => (
              <th scope="col" key={i}>
                {data}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.data.map((row, i) => (
            <tr key={i}>
              {row.map((data,i) => (
                <td key={i}>{data}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
