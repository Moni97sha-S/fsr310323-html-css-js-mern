import React from 'react';
import PropTypes from 'prop-types';

/*
function User(props) {
    return (
        <>
          <h1>
            {props.name} {props.salary + 200} {props.country} 
          </h1>
        </>
    );
}
*/
//! Destructuring technique
function User({id, name, gender, salary, country, info}) {
    return (
        <>
          <h1>
            {id} {name} {gender} {salary + 200} {country} {info} 
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
  gender: PropTypes.oneOf(["male", "female"]).isRequired
};

export default User;