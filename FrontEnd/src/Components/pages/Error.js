import React from 'react'
import { PropTypes } from "prop-types";
import { useNavigate } from 'react-router';

function Error(num) {
    const style = {
        textAlign: 'center',
        padding: '20px',
        margin : "0 auto"
    }
    const navigate = useNavigate();
  return (
    <div style={style}>
        <h1 onClick={() => navigate('/home')}>
          {num.name} {num.age}
        </h1>
      </div>
  )
}

Error.propTypes = {
  name : PropTypes.string,
  age : PropTypes.number
}

export default Error;