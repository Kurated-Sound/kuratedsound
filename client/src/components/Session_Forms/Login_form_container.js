import React from 'react';
import {connect} from 'react-redux';
import {loginUser } from '../../actions/session_actions'
import LoginForm from './Login_form';

const mapStateToProps = (state) => {
    return ({
        formType: "Login",
        errors: state.errors.session
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        loginUser : (user) => dispatch(login(user)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)