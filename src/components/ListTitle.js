import React from 'react'

class ListTitle extends React.Component {
    render() {
        return (
            <div className="item">
                <div className="ui grid">
                    <div className="four wide column">
                        <h1>Image:</h1>
                    </div>
                    <div className="four wide column">
                        <h1>First Name:</h1>
                    </div>
                    <div className="four wide column">
                        <h1>Last Name:</h1>
                    </div>
                    <div className="four wide column">
                        <h1>Email:</h1>
                    </div>
                </div>
            </div>
        );
    }
};

export default ListTitle;