import React , {Component} from 'react'
import './UserOutput.css';

class UserOutput extends Component{

    render(){
        return(
        <div className='UserOutput'>
            <p>
                {this.props.username}
            </p>
            <p>
                {this.props.password}
            </p>
        </div>
        );
    }
}

export default UserOutput;