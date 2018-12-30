import { connect } from 'react-redux'
import Quote from '../presentational/Quote'
import {fetchQuote} from '../../actions/index'

const mapStateToProps = state => (
    {
        quote: state.quoteContext.quote  
    }
)

// fat arrows gimme a headache sometimes...
// function mapDispatchToProps(dispatch) {
//     return  (
//         function onButtonClick() {
//                 dispatch(fetchQuote())
//         }
//     )
// }

const mapDispatchToProps = dispatch => {
    return {
      onButtonClick: () => {
        dispatch(fetchQuote())
      }
    }
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quote)