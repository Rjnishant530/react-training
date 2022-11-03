
export default class EmployeeModel {
    empId = 0;
    firstName = '';
    lastName = '';
    designation = ''

    constructor(empId, firstName, lastName, designation) {
        this.empId = empId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }

    toString() {
        return `${this.empId}  Name :${this.firstName} Designation:${this.designation}`;
    }

}