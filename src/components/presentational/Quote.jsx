import React from 'react'
import PropTypes from 'prop-types'


import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

const Quote = (props) => {
    const { classes, quote, onButtonClick } = props;

    return (
        <Paper className={classes.paper}>
            <p>Random quote</p>
            <Typography variant="h4" gutterBottom style={{fontStyle:"italic"}}>
                {quote}
            </Typography>

            <Button variant="outlined" color="primary" onClick={onButtonClick}>Get Quote</Button>
        </Paper>
    )
}

Quote.propTypes = {
    quote: PropTypes.string.isRequired
}

export default withStyles(styles)(Quote)