import React from 'react';
import SearchBar from './SearchBar';
import Employee from './Employee';
import {employees} from '../EmpData';
import ListTitle from './ListTitle';
import FilterButtons from './FilterButtons';

class App extends React.Component {
    constructor() {
        super()
        // Set state
        this.state = { employees: [], filteredArray: [], sortType: ''};
        //binding
        this.onFilterFName = this.onFilterFName.bind(this);
        this.onFilterLName = this.onFilterLName.bind(this);
    }

    componentWillMount() {
        this.setState({
            employees,
            filteredArray: employees
          })
    }

    //handles onChange event for search bar
    filterEmps = (term) => {
        let filteredArray = this.state.employees 
        filteredArray = filteredArray.filter((emp) => {
            let employeeName = emp.firstName.toLowerCase() + emp.lastName.toLowerCase()
            return employeeName.indexOf(
            term.toLowerCase()) !== -1
        })
        this.setState({
            filteredArray
        })
    }

    //handles button presses for filtering the list
    onFilterFName() {
        console.log("Fname clicked");
        let filteredArray = this.state.employees
        filteredArray = [].concat(filteredArray).sort((a, b) => a.firstName > b.firstName ? 1:-1)

        this.setState({
            filteredArray
        })
        console.log(filteredArray);

    }

    onFilterLName() {
        console.log("Lname clicked");
        let filteredArray = this.state.employees
        filteredArray = [].concat(filteredArray).sort((a, b) => a.lastName > b.lastName ? 1:-1)

        this.setState({
            filteredArray
        })
        console.log(filteredArray);

    }

    render() {
     return (
        <div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar 
                onChange={this.filterEmps}
            />
            <FilterButtons 
                onFilterFName={this.onFilterFName} 
                onFilterLName={this.onFilterLName}
            />
            <ListTitle/>
            <Employee  
                empData={this.state.filteredArray}
            />
        </div>
    );
    }
};

export default App;