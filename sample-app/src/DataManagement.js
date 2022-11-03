import React, { useState } from 'react'

function DataManagement() {
    // const empData = { empId: 101, empName: 'Sony' };
    const [empData, setEmpData] = useState({ empId: 101, empName: 'Sony' })
    const updateDate = (e) => {
        setEmpData({ empId: 199, empName: 'Google' })
    };
    const handleClick = (e) => {
        console.log("Button Clicked");
        // empData.empName = "Microsoft";()
        setEmpData({ empId: 102, empName: 'Microsoft' })

    }
    return (
        <div className="border border-danger p-3">
            <h4 className="bg-warning p-2">Managing App Data</h4>
            <Component1 mData={empData} changeData={updateDate} />
            <DisplayName watup={empData} />
            <br />
            <button className="btn btn-info m-1" onClick={handleClick}>Click Me!</button>
        </div>
    )
}

function Component1({ mData, changeData }) {
    return (
        <>
            <p> Employee Id :{mData.empId}</p>
            <button className="btn btn-secondary mb-1" onClick={changeData}>Change Parent Data</button>
            <br />
        </>

    )
}

function DisplayName({ watup }) {
    return <strong>{watup.empName}</strong>
}
export default DataManagement
