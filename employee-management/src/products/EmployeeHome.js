import React, { Component } from 'react'
import EmployeeModel from '../model/EmployeeModel';
import { getAllEmployes, getEmployeeDetails } from '../services/EmployeeServices'
import EmployeeDetails from './EmployeeDetails';

export class EmployeeHome extends Component {

    state = {
        list: [],
        selectedEmp: {},
        deleteShouldShow: true
    };

    componentDidMount() {
        let empList = getAllEmployes();
        this.setState({ ...this.state, list: empList });
    }

    selectEmp = (id) => {
        var emp = getEmployeeDetails(id);
        this.setState({ ...this.state, selectedEmp: emp })
    }

    updateEmp = (empObj) => {

        let index = this.state.list.findIndex((c) => {
            return c.empId == empObj.empId;
        })

        if (index != -1) {
            this.state.list.splice(index, 1, empObj);

        } else {
            this.state.list.push(empObj)
        }
        this.componentDidMount();
        this.setState({
            ...this.state,
            selectedEmp: new EmployeeModel('', '', '', ''),
            deleteShouldShow: true
        })
    }

    cleared = (e) => {
        let blank = new EmployeeModel('', '', '', '');
        this.setState({ ...this.state, selectedEmp: blank })
    }

    delete = (empObj) => {
        let index = this.state.list.findIndex((c) => {
            return c.empId == empObj.empId;
        })

        if (index != -1) {
            this.state.list.splice(index, 1);
        }
        this.componentDidMount();
        this.cleared();
    }

    newEmp = () => {
        let iids = this.state.list.map((v) => v.empId);
        let newId = Math.max(...iids) + 1;

        let newEmpy = new EmployeeModel(newId, '', '', '');
        this.setState({ ...this.state, selectedEmp: newEmpy, deleteShouldShow: false })
    }
    render() {
        return (
            <div>
                <div className='card text-bg-light m-auto shadow w-75'>
                    <div className='card-header  d-flex'>
                        <div className='flex-grow-1'>
                            <h3 className='text-center'>Employee Management</h3>
                        </div>


                        <button type='button' className='btn btn-primary' onClick={this.newEmp}>New</button>


                    </div>
                    <div className="card-body">
                        <div className='row'>
                            <div className='col-6 border'>
                                <h2 className='text-info text-center m-2'>Employee List</h2>
                                <EmployeeList list={this.state.list} select={this.selectEmp} />
                            </div>
                            <div className='col-6 border'>
                                <h2 className='text-info text-center m-2'>Employee Details</h2>
                                <EmployeeDetails selectEmp={this.state.selectedEmp}
                                    update={this.updateEmp} clear={this.cleared}
                                    deleted={this.delete} deleteShouldShow={this.state.deleteShouldShow} />

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

function EmployeeList(params) {

    return (
        <>
            <table className="table table-light table-striped m-auto">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>


                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        params.list &&
                        params.list.map((value, index) => (
                            <tr key={index}>
                                <td>
                                    {value.empId}
                                </td>
                                <td>
                                    {value.firstName}
                                </td>

                                <td>
                                    <div>
                                        <button type='button' className='btn btn-info' onClick={() => params.select(value.empId)}>Select</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default EmployeeHome
