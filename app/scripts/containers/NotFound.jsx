import React from 'react';
import { shouldComponentUpdate } from 'utils/helpers';

class NotFound extends React.Component {
  shouldComponentUpdate = shouldComponentUpdate;

  render() {
    return (
      <div key="404" className="not-found">
        <h1>404</h1>
      </div>
    );
  }
}

export default NotFound;
