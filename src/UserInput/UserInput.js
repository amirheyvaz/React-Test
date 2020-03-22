import React , {Component} from 'react'
import './UserInput.css';

class UserInput extends Component{
    style = {
        borderColor : 'red'

    };
    render(){
        return (
            <div className="UserInput">
                <input  style={this.style} onChange={this.props.change} value={this.props.children} />
            </div>
        );
    }
}

export default UserInput;