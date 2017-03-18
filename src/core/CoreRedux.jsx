import {Provider, connect} from 'react-redux'
import CommonActions from '../actions/CommonActions'
import AppStore from '../stores/AppStore'

const mapStateToProps = (state, ownProps) => {
    return {
        router: state.router,
        query: ownProps.location !== undefined ? ownProps.location.query : {},
        pathName: ownProps.location !== undefined ? ownProps.location.pathname : '',
        hash: ownProps.location !== undefined ? ownProps.location.hash : ''
    }
}
const Konnect = (klass) => {
    return connect(mapStateToProps, CommonActions)(klass)
}

// const injectModal = connect(mapModalToProp)
// const injectCommit = connect(mapCommitToProp)
//
// const Konnect = compose(
//     injectModal,
//     injectCommit
// )
//
// connect(stateToProps, dispatchToProps)

export {
    AppStore,
    Provider,
    Konnect
}
