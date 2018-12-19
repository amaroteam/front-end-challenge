import React, { PureComponent } from 'react';

const withLoader = WrappedComponent => {
  return class withLoader extends PureComponent {
    render() {
      const { isLoading } = this.props;

      return isLoading ? (
        <p className="App__loading">Carregando...</p>
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};

export default withLoader;
