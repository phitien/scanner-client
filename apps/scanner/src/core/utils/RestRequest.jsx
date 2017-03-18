import Cookies from 'js-cookie';
import RequestBuilder from './RequestBuilder';
import { removeNulls } from './ObjectUtils';

class RestRequest {
    displayError(errorMsg) {
        console.error(errorMsg);
    }

    handleErrorStatus = (res, msg) => {
        var statusCode = res.status;
        switch (statusCode) {
            case 400: break;
            case 401: this.displayError('User Unauthorized'); break;
            case 402: break;
            case 403: break;
            case 404: this.displayError('Resource Not Found'); break;
            case 405: break;
            case 406: break;
            case 407: break;
            case 408: break;
            case 409: break;
            case 410: break;
            case 411: break;
            case 412: break;
            case 413: break;
            case 414: break;
            case 415: break;
            case 416: break;
            case 417: break;
            case 428: break;
            case 429: break;
            case 431: break;
            case 500: this.displayError('System error'); break;
            case 502: this.displayError('It\'s likely Django application is  not running'); break;
            default: console.error(res, msg);
        }
        throw res.response;
    }

    _buildRequest(requestBuilder, data) {
        return requestBuilder.
            addHeader({
                'X-CSRFToken': Cookies.get('csrftoken'),
                'Authorization': 'JWT ' + Cookies.get('app-jwt') ,
                'Content-Type': 'application/json'
            }).
            addType('json').
            add('CrossOrigin', true).
            addData(data).
            build().then( res => {
                removeNulls(res.data)
                return res
            } )
            .catch(this.handleErrorStatus);
    }

    saveRequest(url, data) {
        return this._buildRequest(RequestBuilder.post(url), data);
    }

    updateRequest(url, data) {
        return this._buildRequest(RequestBuilder.put(url), data);
    }

    getRequest(url, data) {
        return this._buildRequest(RequestBuilder.get(url), data);
    }

    deleteRequest(url, data) {
        return this._buildRequest(RequestBuilder.delete(url), data);
    }
}

export default new RestRequest();
