import React from "react";
import OnedayPassStyles from "./css/Onedaypass.module.css";

const OneDayPass = () => {
  return (
    <div className={OnedayPassStyles["pricing-container"]}>
      <div className="container ">
        <h2 className={OnedayPassStyles["sml-heading"]}>One day use pass</h2>
        <div className="mt-5">
          <table className={OnedayPassStyles["pricing-table"]}>
            <thead>
              <tr>
                <th scope="col">CATEGORY</th>
                <th scope="col">PRICE FOR NON-MEMBERS</th>
                <th scope="col">PRICE FOR MEMBERS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Adults</td>
                <td>105 AED</td>
                <td>75 AED</td>
              </tr>
              <tr>
                <td>Kids 1 to 5 Y/O</td>
                <td>35 AED</td>
                <td>20 AED</td>
              </tr>
              <tr>
                <td>Kids 6 to 12 Y/O</td>
                <td>55 AED</td>
                <td>40 AED</td>
              </tr>
              <tr>
                <td>Kids 13 to 17 Y/O</td>
                <td>75 AED</td>
                <td>55 AED</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OneDayPass;
