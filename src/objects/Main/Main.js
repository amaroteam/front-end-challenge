import React from 'react';

import '../../styles/objects/Main.scss';

const Main = ({ children }) => (
  <div className="main" role="main">
    {children}
  </div>
);

export default Main;
