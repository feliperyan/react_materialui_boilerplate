import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import RegForm from '../container/RegForm'
import LoginForm from '../container/LoginForm'
import AuthContainer from '../container/AuthContainer'

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Auth Details</Typography>
        </ExpansionPanelSummary>
        
        <ExpansionPanelDetails>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={4}>
                    <AuthContainer />
                </Grid>
                
                <Grid item xs={12} sm={4}>
                    <LoginForm />
                </Grid>

                <Grid item xs={12} sm={4}>
                    <RegForm />
                </Grid>
            </Grid>
        </ExpansionPanelDetails>

      </ExpansionPanel>
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);