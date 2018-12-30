import Immutable from 'seamless-immutable';

const initialState = Immutable(
    {
        quote: '',
    }
)

const quoteContext = (state = initialState, action) => {
    switch (action.type) {
        case 'GOT_QUOTE':
            console.log('GOT_QUOTE Reducer!');
            return state.merge({quote: action.payload.quote});        
        
        default:
            return state;
    }
}

export default quoteContext;