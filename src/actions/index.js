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

export const updateStatus = data => {
    console.log('UPDATE_STATUS fired');
    return {
        type:'UPDATE_STATUS',
        payload: {
            status: data
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
            let response = await getQuote(token);
            console.log('response from getQuote: ', response);
            
            if (!response.status){
                dispatch(updateStatus(response.message));    
            } else {
                dispatch(gotQuote({quote: response.payload.data}));
                dispatch(updateStatus("all is well"));
            }            
        }
        catch (error){
            console.log('Error in fetchQuote: ', error);
            dispatch(updateStatus("Error fetching, is server up?"));
        }
    }
}

export const registerNewUser = (formBody) => {
    console.log(`registerNewUser fired: ${formBody.email} ${formBody.password}`);
    return async (dispatch) => {
        try {
            let response = await register(formBody.email, formBody.password);
            console.log('response from register: ', response);
            if (!response.status){
                dispatch(updateStatus(response.message));
            }
            else {
                dispatch(userWasRegistered(response));
                dispatch(gotToken(response));
                dispatch(updateStatus('new user registered'));
            }            
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
            if (!response.status){
                dispatch(updateStatus(response.message));    
            }
            else {
                dispatch(gotToken(response));
                dispatch(updateStatus('user logged in'));
            }
            
        }
        catch (error) {
            console.log('Error in registerNewUser: ', error);
        }
    }
}