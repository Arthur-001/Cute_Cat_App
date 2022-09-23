import React from "react";

const Scrolle = (props) => {
    return (
        <div style={{ overflowY: 'scroll', height: '500px', border: '1px solid black', width: 'fitContent' }}>
            {props.children}
        </div>
    );
}

export default Scrolle;