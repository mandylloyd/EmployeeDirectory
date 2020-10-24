import React from 'react';

class FilterButtons extends React.Component {
    render () {
        return (
            <div className="ui centered grid">
                <div className="four wide column">
                    <button 
                    className="large ui purple basic button"
                    onClick={this.props.onFilterFName}>
                        Filter: First Name
                    </button>
                </div>
                <div className="four wide column">
                    <button 
                        className="large ui green basic button"
                        onClick={this.props.onFilterLName}>
                        Filter: Last Name
                    </button>
                </div>
            </div>
        );
    }
};

export default FilterButtons;