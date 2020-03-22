import React , {Component} from 'react';
import './ValidationComponent.css';

class ValidationComponent extends Component{
    render(){
        let massage = '';
        if(this.props.length != null){
            massage = this.props.length >= 5 ? 'Text long enough' : 'Text too short';
        }
        return (
            <div className='ValidationComponent'>
                <p>
                    {massage}
                </p>
            </div>
        );

    }
}

export default ValidationComponent;