import React from 'react'
import PropTypes from 'prop-types'
import './AuthStatus.css'


const Quote = ( {quote, onButtonClick} ) => (
<div className="mainAuthStatus">
    <h2>Random quote</h2>
    <p>{quote}</p>
    <button onClick={onButtonClick}> Get Quote </button>
  </div>
)

Quote.propTypes = {
  quote: PropTypes.string.isRequired
}

export default Quote