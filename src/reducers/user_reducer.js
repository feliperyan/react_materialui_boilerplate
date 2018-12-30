import Immutable from 'seamless-immutable';

const initialState = Immutable(
    {
        email: '',
        password: '',
        token: 'no token',
        is_authenticated: false,
        registration_status: 'not started',
        login_status: 'not started'
    }
)

const userContext = (state = initialState, action) => {
    switch (action.type) {
        case 'GOT_TOKEN':
            console.log('reducing GOT_TOKEN action', action);
            return state.merge( {token: action.payload.token, is_authenticated: true} )
        
        case 'REG_NEW_USER':
            console.log('reducing REG_NEW_USER action', action);
            return state;
        
        default:
            return state;
    }
}

export default userContext;