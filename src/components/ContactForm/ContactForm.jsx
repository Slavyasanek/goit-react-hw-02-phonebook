import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { Form, Input, Label, Button } from './ContactForm.styled';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
    name: '',
    number: ''
}

class ContactForm extends Component {
    state = {...INITIAL_STATE};

    nameInputId = nanoid();
    telInputId = nanoid();
    
    static propTypes = {
        saveContact: PropTypes.func.isRequired,
    }

    handleChange = ({target}) => {
        this.setState({
            [target.name]: target.value,
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.saveContact({
            ...this.state, id: nanoid()
        })
       this.reset();
    }
    reset = () => {
        this.setState({...INITIAL_STATE});
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Label htmlFor={this.nameInputId}>Name</Label>
                <Input
                    type="text"
                    id={this.nameInputId}
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    value={this.state.name}
                    onChange={this.handleChange}
                    required
                />
                <Label htmlFor={this.telInputId}>Number</Label>
                <Input
                    type="tel"
                    id={this.telInputId}
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    value={this.state.number}
                    onChange={this.handleChange}
                    required
                />
                <Button type='submit'>Add contact</Button>
            </Form>
        );
    }
}

export default ContactForm;