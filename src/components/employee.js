import React from 'react';

const Employee = (props) => {
    return (
        <div className="item">
            <img className="ui avatar image"></img>
            <div className="content">
                <a className="header">{props.firstName} {props.lastName}</a>
                <div className="description">{props.email}</div>
            </div>
        </div>
    )
};

export default Employee;