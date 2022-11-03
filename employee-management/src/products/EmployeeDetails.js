import React, { Component } from 'react'


export class EmployeeDetails extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selectEmp: props.selectEmp,
            deleteShouldShow: props.deleteShouldShow
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.selectEmp.empId !== state.selectEmp.empId) {
            return props;
        }
        return state;
    }

    hasChanged = (e) => {
        this.setState({ selectEmp: { ...this.state.selectEmp, [e.target.name]: e.target.value } })
    }

    diagnostics() {
        return JSON.stringify(this.state.selectEmp)
    }

    submitted = (e) => {
        e.preventDefault();
        this.props.update(this.state.selectEmp);
    }

    cleared = (e) => {
        e.preventDefault();
        this.props.clear();
    }


    render() {
        return (
            <div>

                <form onSubmit={this.submitted} onReset={this.cleared}>
                    <div className='form-group'>
                        <label htmlFor='empId'>Empolyee ID:</label>
                        <input type='text' className='form-control' name="empId"
                            value={this.state.selectEmp.empId} readOnly></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='firstName'>First Name:</label>
                        <input type='text' className='form-control' name="firstName"
                            value={this.state.selectEmp.firstName}
                            onChange={this.hasChanged}></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='lastName'>Last Name:</label>
                        <input type='text' className='form-control' name="lastName"
                            value={this.state.selectEmp.lastName}
                            onChange={this.hasChanged}></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='designation'>Designation :</label>
                        <input type='text' className='form-control' name="designation"
                            value={this.state.selectEmp.designation}
                            onChange={this.hasChanged}></input>
                    </div>
                    <div className='text-center '>
                        <button type='submit' className='btn btn-success m-1'>Save</button>
                        <button type='reset' className='btn btn-secondary m-1'>Clear</button>
                        {
                            this.state.deleteShouldShow &&
                            <button type='button' className='btn btn-danger m-1'
                                onClick={() => {
                                    this.props.deleted(this.state.selectEmp)
                                }}>Delete</button>
                        }

                    </div>
                </form>
            </div>
        )
    }
}

export default EmployeeDetails
