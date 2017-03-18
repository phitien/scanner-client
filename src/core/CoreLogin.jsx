import React from 'react'
import CoreComponent from './CoreComponent'
import CoreBrand from './CoreBrand'

export default class CoreLogin extends CoreComponent {
    get mainClassName() {return ''}
    onLoginClick = e => {
        this.authStore.authJWTKey = 'logged-in'
    }
    componentDidMount() {
        jQuery('html').addClass('login-pf')
    }
    render() {
        return <div className={this.className}>
            <span id="badge"><img src="static/images/logo/logo.gif" alt="Scanner Application - Standard Chartered Bank"/></span>
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <CoreBrand/>
                </div>
                <div className="col-sm-7 col-md-6 col-lg-5 login">
                  <form className="form-horizontal" role="form">
                    <div className="form-group">
                      <label for="inputUsername" className="col-sm-2 col-md-2 control-label">Username</label>
                      <div className="col-sm-10 col-md-10">
                        <input type="text" className="form-control" placeholder="Username" tabIndex="1"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="inputPassword" className="col-sm-2 col-md-2 control-label">Password</label>
                      <div className="col-sm-10 col-md-10">
                        <input type="password" className="form-control" placeholder="Password" tabIndex="2"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-8 col-sm-offset-2 col-sm-6 col-md-offset-2 col-md-6">
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" tabIndex="3"/> Remember username
                          </label>
                        </div>
                        <span className="help-block">Forgot <a href="#" tabIndex="5">username</a> or <a href="#" tabIndex="6">password</a>?</span>
                      </div>
                      <div className="col-xs-4 col-sm-4 col-md-4 submit">
                        <button type="submit" className="btn btn-primary btn-lg" tabIndex="4" onClick={this.onLoginClick}>Log In</button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-sm-5 col-md-6 col-lg-7 details">
                  <p>
                    <strong>Welcome to Scanner Application!</strong>
                  </p>
                </div>
              </div>
            </div>
        </div>
    }
}
