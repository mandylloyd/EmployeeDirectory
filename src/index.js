import React from 'react';
import ReactDOM from 'react-dom';
import Employee from './components/Employee';
import SearchBar from './components/SearchBar';

const App = () => {
    return (
        <div>
            <SearchBar />
            <Employee
            img=""
            firstName="Sam"
            lastName="Smith"
            email="samsmith4@gmail.com"
            />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));