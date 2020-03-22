import React , {Component} from 'react';
import './CharComponent.css';

class CharComponent extends Component{
    render(){
        return (
            <div className='CharComponent'>
                <p onClick={this.props.click}>
                    {this.props.children}
                </p>
            </div>
            );
        }
    }
    
    export default CharComponent;