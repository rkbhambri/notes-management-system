import React from 'react';

const Nav = (props) => {
    return (
        <div className="nav-container">
            <div className="nav-logo">NOTES</div>
            <div className="nav-button" onClick={() => props.toggleNote()}>
                {props.showNote ? 'Cancel' : '+ Note'}
            </div>
        </div>
    );
};

export default Nav;