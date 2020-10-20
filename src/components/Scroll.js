import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '3px solid aqua', height: '700px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;