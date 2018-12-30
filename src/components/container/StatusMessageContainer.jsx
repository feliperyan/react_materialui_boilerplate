import { connect } from 'react-redux'
import MessageStatus from '../presentational/MessageStatus'


const mapStateToProps = state => (
    {
        the_status: state.userContext.status
    }
)

export default connect(mapStateToProps)(MessageStatus);