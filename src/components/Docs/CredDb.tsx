import React, { useEffect, useState } from "react";

function CredDb() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/data/cred-db.json")
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
                <th>Required Fields</th>
                <th>Disabled Fields</th>
            </tr>
            </thead>
            <tbody>
            {data.map((entry, index) => (
                <tr key={index}>
                    <td>{entry.name}</td>
                    <td>{entry.registry_description}</td>
                    <td>{entry.required_fields}</td>
                    <td>{entry.disabled_fields || ""}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default CredDb;
