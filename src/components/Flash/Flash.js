import React, { useEffect } from 'react';

const Flash = (props) => {

    useEffect(() => {
        setTimeout(() => {
            props.resetError();
        }, 1000);
    }, []);

    return (
        <div className="flash-container">
            {props.error}
        </div>
    );
};

export default Flash;