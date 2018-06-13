import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class CartResume extends PureComponent {
    static propTypes = {
        count: PropTypes.number,
    }

    render() {
        const { count } = this.props;
        return (
            <p>{count} item(s)</p>
        );
    }
}

export default CartResume;
