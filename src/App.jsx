import React, { Component } from 'react';

import QuoteContainer from './components/container/QuoteContainer'
import MessageStatus from './components/container/StatusMessageContainer'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import Grid from '@material-ui/core/Grid';
import MyAppBar from './components/presentational/MyAppBar';
import SimpleExpansionPanel from './components/presentational/Collapsible';

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
    typography: {
        useNextVariants: true,
    },
});

const mainDiv = {
    margin: '1em'
};

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <MyAppBar />
                <div style={mainDiv}>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <QuoteContainer />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <MessageStatus />
                        </Grid>
                        <Grid item xs={12} >
                            <SimpleExpansionPanel />
                        </Grid>                        
                    </Grid>
                </div>
            </MuiThemeProvider>
        );
    }
}


export default App;
