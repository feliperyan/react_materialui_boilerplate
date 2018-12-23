
const userContext = (state = [], action) => {
    switch (action.type) {
        case 'GOT_TOKEN':
            console.log('GOT_TOKEN action!')
            return [...state, {token: action.payload.token}]
        
        case 'REG_NEW_USER':
            console.log('REG_NEW_USER action!')
            return state;
        
        default:
            return state;
    }
}

export default userContext;