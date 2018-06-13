import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BadgeStyle = styled.span`
    width: 50px;
    height: 50px;
    background: red;
    color: white;
    display: block;
    position: absolute;
    top: 8px;
    left: 8px;
    line-height: 50px;
    text-align: center;
    border-radius: 100%;
`;

class Badge extends PureComponent {
    static propTypes = {
        discount: PropTypes.string,
    }

    render() {
        return (
            <BadgeStyle>
                {this.props.discount}
            </BadgeStyle>
        )
    }
}

export default Badge;
