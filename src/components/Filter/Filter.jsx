import React, { Component } from 'react';
import { FilterInput, FilterWrapper } from './Filter.styled';
import { AiOutlineSearch } from 'react-icons/ai'
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

class Filter extends Component {
    filterId = nanoid();
    static propTypes = {
        filterChange: PropTypes.func.isRequired,
        filterValue: PropTypes.string.isRequired
    }

    render() {
        return (
        <FilterWrapper>
            <label htmlFor={this.filterId}>Find contacts by name</label>
            <FilterInput
                type="text"
                id={this.filterId}
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder='Searching by name...'
                onChange={this.props.filterChange}
                value={this.props.filterValue}
            />
            <AiOutlineSearch />
        </FilterWrapper>);
    }
}

export default Filter;