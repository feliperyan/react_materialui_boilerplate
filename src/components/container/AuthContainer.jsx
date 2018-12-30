import { connect } from 'react-redux'
import AuthStatus from '../presentational/AuthStatus'


const mapStateToProps = state => (
    {
        authenticated: state.userContext.is_authenticated,
        token: state.userContext.token
    }
)

export default connect(mapStateToProps)(AuthStatus)