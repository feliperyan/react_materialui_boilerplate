import React from 'react'
import PropTypes from 'prop-types'

import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

const MessageStatus = (props) => {
    const {classes, the_status} = props;
    return (
        <Paper className={classes.paper}>
            <p><span style={{fontWeight:"bold"}}>Status:</span> {the_status} </p>
        </Paper>
    )
}
MessageStatus.propTypes = {
    the_status: PropTypes.string.isRequired
}

export default withStyles(styles)(MessageStatus)