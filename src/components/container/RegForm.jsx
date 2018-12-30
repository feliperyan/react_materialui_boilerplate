import React from 'react'
import {connect} from 'react-redux'
import {registerNewUser} from '../../actions'
import './MainForm.css';

const RegForm = ({dispatch}) => {
    let email
    let password

    return (
        <div className="mainform">
            <p>Registration Form</p>
            <form onSubmit={e => {
                e.preventDefault()
                if (!email.value.trim() || !password.value.trim()) {
                    return
                }
                dispatch(registerNewUser({email: email.value, password: password.value}))
                email.value = ''
                password.value = ''
            }}>
                <p><input ref={node => (email = node)} /></p>
                <p><input ref={node => (password = node )} /></p>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default connect()(RegForm)