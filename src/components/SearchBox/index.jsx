import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Search = styled.input`
    height: 45px;
    font-size: 14px;
    border: 1px solid #ddd;
    background #ddd;
    padding: 0 16px;
    outline: 0;
    width: 30%;

    &:focus {
        background: white;
    }
`;

class SearchBox extends PureComponent {
    static propTypes = {
        search: PropTypes.func,
    }

    handleSearch = event => {
        const searchText = event.target.value;

        this.props.search(searchText.toUpperCase());
    }

    render() {
        return (
            <Search
                placeholder="Buscar"
                onKeyUp={this.handleSearch}
            />
        )
    }
}

export default SearchBox;
