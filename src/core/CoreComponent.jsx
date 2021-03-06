import React from 'react'
import ReactDOM from 'react-dom'
import coreUser from './CoreUser'
import coreUtil from './CoreUtil'
import AuthService from './auth/Service'

const location = typeof window != 'undefined' ? window.location : {hash: '', search: '', href: ''};

export default class CoreComponent extends React.Component {
    constructor(props) {
        super(props)
        this._service = null
        this.state = {refresh: false}
        this.init()
    }
    init() {}
    componentDidMount() {this._mounted = true}
    componentWillUnmount() {this._mounted = false}

    get util() {return coreUtil}
    get routeParams() {return this.util.getCookie('route-params')}

    get authStore() {return this.authService.store}
    get authService() {return AuthService}
    get history() {return this.util.history}
    get isMounted() {return this._mounted}
    get user() {return coreUser}
    get mainClassName() {return ''}
    get className() {return this.mainClassName + ' ' + (this && this.props && this.props.className ? this.props.className : '')}
    get uuid() {
        if (!this._uuid) this._uuid = 'app_' + (new Date()).valueOf() + Math.random().toFixed(16).substring(2)
        return this._uuid
    }
    set uuid(v) {this._uuid = v}
    get showLogin() {return !this.user.isLoggedIn && (location.hash == '#login' || this.util.getCookie('login-required') == 1)}
    get showResetPassword() {return location.hash == '#reset-password' || this.util.getCookie('reset-password') == 1}

    refresh = (state) => {
        this.util.assign(this.state, state , {
            refresh: !this.state.refresh
        })
        this.setState(this.state)
    }
    renderChild = (child, i) => {
        try {
            var me = this
            var addonProps = {key:i}
            return React.cloneElement(child, addonProps)
        } catch (e) {
            return null
        }
    }
    onLogoutOut = (e) => this.user.logout()
    validate = () => this.removeError()
    validateFieldEmail = (field, message) => {
        const regex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (regex.test(this[field].value)) return true
        this.setError(field, message)
    }
    validateFieldNotEmpty = (field, message) => {
        if (this[field].value) return true
        this.setError(field, message)
    }
    validateFieldMinLength = (field, minLength, message) => {
        if (this[field].value && this[field].value.length >= minLength) return true
        this.setError(field, message)
    }
    validateFieldMaxLength = (field, maxLength, message) => {
        if (this[field].value && this[field].value.length <= maxLength) return true
        this.setError(field, message)
    }
    validateValuesMatched = (field1, field2, message) => {
        if (this[field1].value == this[field2].value) return true
        this.setError(field2, message)
    }
    setError = (field, message) => this.setState({
        disabled: false,
        message: message,
        errorField: field
    })
    removeError = () => {
        this.setState({
            message: null,
            errorField: null
        })
        return true
    }
}
