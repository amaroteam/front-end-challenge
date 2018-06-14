import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import CartResume from '../CartResume';
import SearchBox from '../SearchBox';

const HeaderWrapper = styled.header`
    display: flex;
    padding: 0 16px;
    height: 75px;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0;
    background: #fff;
    z-index: 1;
`;

class Header extends PureComponent {
    static propTypes = {
        count: PropTypes.number,
        search: PropTypes.func,
    }

    render() {
        const { count, search } = this.props;

        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo />
                </Link>
                <SearchBox search={search} />
                <Link to="/cart">
                    <CartResume count={count} />
                </Link>
            </HeaderWrapper>
        )
    }
}

export default Header;
