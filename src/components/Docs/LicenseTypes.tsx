import React, { useEffect, useState } from "react";

function LicenseTypes() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/data/license-types.json")
            .then((response) => response.json())
            .then((jsonData) => setData(jsonData))
            .catch((error) => console.error("Error loading JSON:", error));
    }, []);

    return (
        <table>
            <thead>
            <tr>
                <th>License Types</th>
            </tr>
            </thead>
            <tbody>
            {data.map((entry, index) => (
                <tr key={index}>
                    <td>{entry.label}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default LicenseTypes;
