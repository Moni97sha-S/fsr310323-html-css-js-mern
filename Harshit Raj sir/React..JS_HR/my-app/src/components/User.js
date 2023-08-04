import React from 'react';

function User(props) {
    return (
        <>
          <h1>
            {props.name} {props.salary + 200} {props.country} 
          </h1>
        </>
    );
}

//Type checking
User.propTypes = {
    name: PropTypes.string.isRequired,
    salary: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    info: PropTypes.array.isRequired,

    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    gender: PropTypes.oneOf("male", "female").isRequired,
};

export default User;