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
        <div className="Users">
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
                    tableData === null ? <th>No data found to display</th> : <tbody>
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
        </div>
    )
}


export default Table;