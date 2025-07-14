import React, { useEffect, useState } from "react";

function CredDb() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/data/exclusion-lists.json")
            .then((response) => response.json())
            .then((jsonData) => setData(jsonData))
            .catch((error) => console.error("Error loading JSON:", error));
    }, []);

    return (
        <table>
            <thead>
            <tr>
                <th>Registry</th>
                <th>Registry Description</th>
                <th>Type</th>
                <th>Fields</th>
            </tr>
            </thead>
            <tbody>
            {data.map((entry, index) => {
                return <tr key={index}>
                    <td>{entry.prefix}</td>
                    <td>{entry.description}</td>
                    <td>{entry.type}</td>
                    <td>{entry.columns}</td>
                </tr>
            })}
            </tbody>
        </table>
    );
}

export default CredDb;
