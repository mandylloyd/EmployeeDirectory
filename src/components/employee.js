import { image } from 'faker';
import React from 'react';


import "../styles.css";

const Employee = (props) => {

    return props.empData.map((item, index )=> ( 
        <div className="ui list">
            <div className="item">
                <div className="ui grid">
                    <div className="four wide column">
                        <img alt="Avatar" className="photo" src={require('../images' + item.image)}/>
                    </div>
                    <div className="four wide column">
                        {item.firstName}
                    </div>
                    <div className="four wide column">
                        {item.lastName}
                    </div>
                    <div className="four wide column">
                        {item.email}
                    </div>
                </div>
            </div>
        </div>
    ))
};

export default Employee;