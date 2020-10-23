import React from 'react';
import SearchBar from './SearchBar';
import Employee from './Employee';

const App = () => {
    return (
    <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar />
            <Employee
            img=""
            firstName="Sam"
            lastName="Smith"
            email="samsmith4@gmail.com"
            />
    </div>
    )
};

export default App;