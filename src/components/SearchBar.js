import React from 'react';

const SearchBar = () => {
    return (
        <div className="ui category search">
        <div className="ui icon input">
                <input className="prompt" type="text" placeholder="Search employees..."/>
                    <i className="search icon"/>
            <div className="results"></div>
            </div>
        </div>
    )
};

export default SearchBar;