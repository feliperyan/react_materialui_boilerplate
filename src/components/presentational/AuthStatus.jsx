import React from 'react'
import PropTypes from 'prop-types'
import './AuthStatus.css'


const AuthStatus = ( {authenticated, token} ) => (
<div className="mainAuthStatus">
    <p>    
      Authenticated: { authenticated? 'Yes' : 'No' }      
    </p>
    <p>Token: { token }</p>
  </div>
)
AuthStatus.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired
}

export default AuthStatus