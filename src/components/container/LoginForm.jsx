import React from 'react'
import {connect} from 'react-redux'
import {loginUser} from '../../actions'
import './MainForm.css';

const LoginForm = ({dispatch}) => {
    let email
    let password

    return (
        <div className="mainform">
            <p>Login Form</p>
            <form onSubmit={e => {
                e.preventDefault()
                if (!email.value.trim() || !password.value.trim()) {
                    return
                }
                dispatch(loginUser({email: email.value, password: password.value}))
                email.value = ''
                password.value = ''
            }}>
                <p><input ref={node => (email = node)} /></p>
                <p><input ref={node => (password = node )} /></p>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default connect()(LoginForm)