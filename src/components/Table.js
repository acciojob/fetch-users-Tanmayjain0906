import React, { useState } from "react";
import axios from "axios";

const Table = () => {

    const [tableData, setTableData] = useState(null);

    function fetchData() {
        axios.get("https://reqres.in/api/users").then((response) => {

            setTableData(response.data.data);
        });
    }

    return (
        <div>
            <div className="upper">
                <h2>Blue Whales</h2>
                <button onClick={fetchData} id="fetch-btn">Get User List</button>
            </div>

            <table>
                <thead className="thead">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Avatar</th>
                    </tr>
                </thead>

                {
                    tableData === null ? <p></p> : <tbody>
                        {
                            tableData.map((items) => (
                                <tr>
                                    <td>{items.first_name}</td>
                                    <td>{items.last_name}</td>
                                    <td>{items.email}</td>
                                    <td><img src={items.avatar} alt="logo" /></td>
                                </tr>
                            ))
                        }
                    </tbody>
                }
            </table>

            {
                tableData === null ? <h2 id="nothing">No data found to display</h2> : <p></p>
            }
        </div>
    )
}


export default Table;