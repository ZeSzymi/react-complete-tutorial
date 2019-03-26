import React,  { Component } from 'react';
import './Person.css';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux'

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
       // this.inputElement.focus();    
        this.inputElementRef.current.focus(); 
    }

    render() {
        console.log(this.props.isAuth);
        return (<Aux><div className="Person">
            { this.props.isAuth ? <p>Authenticated!</p> : <p>Please Log In</p> }
            { this.props.isAuth }
            <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old</p>
            <p>{this.props.children}</p>
            <input
            // ref={(inputEl) => {this.inputElement = inputEl}}
            ref = { this.inputElementRef }
            onChange={this.props.changed} 
            value={this.props.name}></input>
        </div></Aux>)
    }

}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);
