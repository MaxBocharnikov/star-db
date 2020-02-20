import React from 'react';

const withChildFuntion = (fn) => (Wrapped) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
};

export default withChildFuntion;