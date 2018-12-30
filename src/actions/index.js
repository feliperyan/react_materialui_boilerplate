import { getQuote, register, login } from '../services/quoteoftheday'


export const gotQuote = data => {
    console.log('GOT_QUOTE actions: ', data);
    return {
        type: "GOT_QUOTE",
        payload: {
            quote: data.quote
        }
    };
}

export const gotToken = data => {
    console.log('GOT_TOKEN fired ', data);
    return {
        type: 'GOT_TOKEN',
        payload: {
            token: data.userAccount.Token
        }
    }
}

export const userWasRegistered = data => {
    console.log('USER_REGISTERED fired ', data);
    return {
        type: 'USER_REGISTERED',
        payload: {
            message: 'something'
        }
    }
}

// Thunks
export const fetchQuote = () => {
    console.log("fetchQuote fired");
    return async(dispatch, getState) => {
        try {            
            let token = getState().userContext.token;
            //token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjE2LCJleHAiOjE1NDYwMTA5MzF9.tqgXspj92-Rk1MqYy1NycTmX8I3p2WkwUAFj3x4dmCE';
            let response = await getQuote(token);
            console.log('response from getQuote: ', response);
            dispatch(gotQuote({quote: response.payload.data}));
        }
        catch (error){
            console.log('Error in fetchQuote: ', error);
        }
    }
}

export const registerNewUser = (formBody) => {
    console.log(`registerNewUser fired: ${formBody.email} ${formBody.password}`);
    return async (dispatch) => {
        try {
            let response = await register(formBody.email, formBody.password);
            console.log('response from register: ', response);
            dispatch(userWasRegistered(response));
            dispatch(gotToken(response));
        }
        catch (error) {
            console.log('Error in registerNewUser: ', error);
        }
    }
}

export const loginUser = (formBody) => {
    console.log(`loginUser fired: ${formBody.email} ${formBody.password}`);
    return async (dispatch) => {
        try {
            let response = await login(formBody.email, formBody.password);
            console.log('response from register: ', response);            
            dispatch(gotToken(response));
        }
        catch (error) {
            console.log('Error in registerNewUser: ', error);
        }
    }
}