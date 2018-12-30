import { combineReducers } from 'redux'
import quoteContext from './quote_reducer'
import userContext from './user_reducer'


const quoteApp = combineReducers({
    quoteContext,
    userContext
  })
  
  export default quoteApp