import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onEdit = e => {
        this.setState({
            term: e.target.value
          })
          this.props.onChange(e.target.value)
    }

    render() {
        return (
        <div className="ui segment">
            <form className="ui form">
                <div className="field">
                <label>Employee Search</label>
                    <input 
                    type="text" 
                    value={this.state.term} 
                    onChange={this.onEdit}
                     />
                </div>  
            </form>  
        </div>
        );
    }
};

export default SearchBar;