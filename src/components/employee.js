import React from 'react';

const Employee = (props) => {
    return (
        <div className="ui massive horizontal divided list">
        <div className="item">
            <img className="ui avatar image"></img>
            <div className="content">
            {props.firstName} {props.lastName} {props.email}
            </div>
        </div>
    </div>
    )
};

export default Employee;