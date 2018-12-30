import React from 'react'
import PropTypes from 'prop-types'
import './AuthStatus.css'


const MessageStatus = ({ the_status })  => (
<div className="mainAuthStatus">
    <p>Status: { the_status } </p>
</div>
)
MessageStatus.propTypes = {
  the_status: PropTypes.string.isRequired
}

export default MessageStatus