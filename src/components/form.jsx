import React from 'react'
import {connect} from 'react-redux'
import {registerNewUser} from '../actions'


const MainForm = ({dispatch}) => {
    let email
    let password

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!email.value.trim() || !password.value.trim()) {
                    return
                }
                dispatch(registerNewUser({email: email.value, password: password.value}))
                email.value = ''
                password.value = ''
            }}>
                <input ref={node => (email = node)} />
                <input ref={node => (password = node )} />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default connect()(MainForm)