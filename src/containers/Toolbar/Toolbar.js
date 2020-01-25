import React from 'react';

import '../../styles/containers/Toolbar.scss';

import Container from '../../layout/Container';

const Toolbar = ({ intro }) => (
  <div className="am-toolbar">
    <Container>
      <h1 className="am-toolbar__intro">{intro}</h1>
    </Container>
  </div>
);

export default Toolbar;
