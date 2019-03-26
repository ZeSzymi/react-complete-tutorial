import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux'
import withClass from '../hoc/withClass';
import AuthContext from '../context/auth-context';


class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Stephanie', age: 26 }
    ],
    changeCounter: 0,
    showPersons: false,
    showCockpit: true,
    authenticated: false,
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() { }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', state);
    return state;
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState((prevState, props) => { return { persons: persons, changeCounter: prevState.changeCounter + 1 } })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  loginHandler = () => {
    this.setState({ authenticated: true });
  }

  componentDidMount() {
    console.log('[App.js] ComponentDidMount')
  }

  render() {
    console.log('[App.js] render')
    let persons = null;
    console.log(this.state.authenticated);
    if (this.state.showPersons) {
      persons = (
        <Persons persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    }

    return (
      <Aux>
        <div className={classes.App}>
          {this.state.changeCounter}
          <button onClick={() => {
            this.setState({ showCockpit: false })
          }}>Remove Cockpit</button>
            <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
              { this.state.showCockpit ?
              <Cockpit
                title={this.props.appTitle}
                showPersons={this.state.showPersons}
                personsLength={this.state.persons.length}
                click={this.togglePersonsHandler}
                login={this.loginHandler}
              /> : null }
            </AuthContext.Provider>
          {persons}
        </div>
      </Aux>
    );
  }
}


export default withClass(App, classes.App);
