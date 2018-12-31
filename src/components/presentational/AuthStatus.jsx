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

const AuthStatus = (props) => {
    const { classes, authenticated, token } = props;
    return (
        <Paper className={classes.paper}>
            <p>
                <span style={{fontWeight:"bold"}}>Authenticated:</span> {authenticated ? 'Yes' : 'No'}
            </p>
            <p style={{wordBreak:"break-all"}}><span style={{fontWeight:"bold"}}>Token:</span> {token}</p>
        </Paper>
    )
}

AuthStatus.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    token: PropTypes.string.isRequired
}

export default withStyles(styles)(AuthStatus);