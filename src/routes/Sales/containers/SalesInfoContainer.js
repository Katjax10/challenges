import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { getNewInfo } from '../reducers/salesInfoReducer'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

import SalesInfo from '../components/SalesInfo'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = (dispatch) => ({
  reload: bindActionCreators(getNewInfo, dispatch)
});

const mapStateToProps = (state) => (
{
  state
});

export default connect(mapStateToProps, mapDispatchToProps)(SalesInfo)
