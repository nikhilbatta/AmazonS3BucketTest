import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Homepage from './Homepage'
import NewPostForm from './NewPostForm'
import PFU from './PFU.jsx'

class App extends React.Component {
    constructor(props) {
    console.log(props)
    super(props);
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={PFU} />
                    <Route path='/allposts' render={() => <Homepage masterPostList={this.props.masterPostList}/>} />
                </Switch>
            </div>
        )
    }
}
App.propTypes = {
    masterPostList: PropTypes.array
}
const mapStateToProps = state => {
    return {
        masterPostList: state
    }
}
export default withRouter(connect(mapStateToProps)(App))