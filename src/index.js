import React from 'react';
import ReactDOM from 'react-dom';
import Employee from './components/Employee';

const App = () => {
    return (
        <div>
            <Employee
            img=""
            firstName="Sam"
            lastName="Smith"
            email="samsmith4@gmail.com"
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));