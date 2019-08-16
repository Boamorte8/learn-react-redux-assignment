import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionsTypes from '../store/actions';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    state = {
        persons: []
    }

    personAddedHandler = (name, age) => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: name,
            age: age
        }
        this.props.onAddPerson(newPerson);
    }

    personDeletedHandler = (personId) => {
        this.props.onDeletePerson(personId);
    }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.personAddedHandler} />
                {this.props.persons.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.personDeletedHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        persons: state.persons
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddPerson: (value) => dispatch({type: actionsTypes.ADD, person: value}),
        onDeletePerson: (value) => dispatch({type: actionsTypes.DELETE, id: value}),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Persons);