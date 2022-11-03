import EmployeeModel from "../model/EmployeeModel";

const arrayOfEmployees = [
    new EmployeeModel(2018504001, 'Atul', 'Sharma', 'Sr Officer'),
    new EmployeeModel(2018504002, 'Nishant', 'Singh', 'Software Dev'),
    new EmployeeModel(2018504003, 'Prasant', 'Singh', 'Doc'),
    new EmployeeModel(2018504004, 'Tesla', 'Coils', 'Electrician'),
    new EmployeeModel(2018504005, 'Bill', 'Gates', 'Technician'),
    new EmployeeModel(2018504006, 'Mark', 'Je', 'Tester'),
    new EmployeeModel(2018504007, 'Steve', 'Job', 'Product Design'),
    new EmployeeModel(2018504008, 'Abdul', 'Kalam', 'President'),
    new EmployeeModel(2018504009, 'Narendra', 'Modi', 'Sr Officer'),
    new EmployeeModel(2018504010, 'Light', 'Yagami', 'Investigator'),
    new EmployeeModel(2018504011, 'Taumo', 'san', 'Finance'),

]

export const getAllEmployes = () => {
    return arrayOfEmployees;
}

export const getEmployeeDetails = (id) => {
    return arrayOfEmployees.filter((v) => v.empId == id)[0];
}



