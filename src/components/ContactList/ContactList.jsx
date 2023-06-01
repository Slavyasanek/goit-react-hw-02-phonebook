import React, { Component } from 'react';
import { Contact, List, Name, Tel, DeleteButton } from './ContactList.styled';
import { RiDeleteBin6Line } from 'react-icons/ri'
import PropTypes from 'prop-types';

class ContactList extends Component {
    state = {}
    static propTypes = {
        contacts: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired
        })),
        deleteContact: PropTypes.func.isRequired,
    }

    render() {
        const { contacts, deleteContact } = this.props;
        return (
            <List>
                {contacts.length > 0 ? (
                    contacts.map(contact => {
                        return (
                            <Contact key={contact.id} data-contact={contact.id}>
                                <Name>{contact.name}</Name>
                                <Tel>{contact.number}</Tel>
                                <DeleteButton type='button' onClick={deleteContact}><RiDeleteBin6Line /></DeleteButton>
                            </Contact>
                        )
                    })
                )
                    : (<Contact>No matches found</Contact>)
                }
            </List>
        );
    }
}

export default ContactList;