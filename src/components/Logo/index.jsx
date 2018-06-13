import React, { PureComponent } from 'react';
import styled from 'styled-components';
import LogoSrc from '../../assets/images/logo.svg';

const LogoWrapper = styled.h1`
    height: 27px;
`;

const Image = styled.img`
    width: auto;
    height: 100%;
`;

class Logo extends PureComponent {
    render() {
        return (
            <LogoWrapper>
                <Image src={LogoSrc} alt="Amaro" />
            </LogoWrapper>
        )
    }
}

export default Logo;
