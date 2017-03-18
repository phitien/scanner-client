import AppDispatcher from '../../dispatchers/AppDispatcher'
import {EVENTS, CoreStore, CoreActions, CoreService} from '../CoreService'

EVENTS.sure('auth', 'search_searchdata')

class Actions extends CoreActions {

}

class Store extends CoreStore {
    get userInfo() {return this.getProp('userInfo')}
    set userInfo(v) {this.setProp('userInfo', v, true)}
    get authJWTKey() {return this.getProp('app-jwt', this.util.getCookie('app-jwt'))}
    set authJWTKey(v) {
        this.util.setCookie('app-jwt', v)
        this.setProp('app-jwt', v, true)
    }
    get isLoggedIn() {
        return this.authJWTKey ? true : false
    }
    clear = () => this.util.deleteCookie(this.authJWTKey)
}

class Service extends CoreService {
    get baseUrl() {return `/api/auth`}
}

export default new Service(EVENTS.AUTH, new Store(), new Actions())
