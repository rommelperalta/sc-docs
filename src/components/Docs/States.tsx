import React, { useEffect, useState } from "react";

function States() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/data/states.json")
            .then((response) => response.json())
            .then((jsonData) => setData(jsonData))
            .catch((error) => console.error("Error loading JSON:", error));
    }, []);

    return (
        <table>
            <thead>
            <tr>
                <th>State</th>
                <th>Abbreviation</th>
            </tr>
            </thead>
            <tbody>
            {data.map((entry, index) => (
                <tr key={index}>
                    <td>{entry.name}</td>
                    <td>{entry.abbr}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default States;
