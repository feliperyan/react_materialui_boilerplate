import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../../actions'
import './MainForm.css';

import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    button: {
        textAlign:'right',
    }
});

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    render() {
        const { classes, dispatch } = this.props;
        return (
            <Paper className={classes.paper}>
                <p>Login Form</p>
                <form>
                    <TextField className={classes.textField} value={this.state.email} label="Email"
                        onChange={(e) => this.setState({ email: e.target.value })}></TextField>

                    <TextField className={classes.textField} value={this.state.password} label="Password"
                        onChange={(e) => this.setState({ password: e.target.value })}></TextField>

                    <br></br>
                    <br></br>
                    <div className={classes.button}>
                        <Button variant="outlined" color="primary" onClick={() => {
                            if (!this.state.email || !this.state.password) {
                                return
                            }
                            dispatch(loginUser({ email: this.state.email, password: this.state.password }))
                            this.setState({ email: '' })
                            this.setState({ password: '' })
                            }}>
                            Login
                        </Button>    
                    </div>
                    
                </form>
            </Paper>
        );
    }
}


export default withStyles(styles)(connect()(LoginForm))