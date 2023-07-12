import React from "react";
import { useState, useEffect } from "react";

export default function Table() {

    const [data, setData] = useState([])

    useEffect(() => {
        async function serverData() {
            const raw = await fetch('http://localhost:5000/routes/all')
            const response = await raw.json()
            setData(response)
            console.log(await response)
        }
        serverData()

    }, [])

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr className="row-labels">
                        <th>Id</th>
                        <th>Full name</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value) => {
                        return (
                            <tr>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.phone}</td>
                                <td>{value.email}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}