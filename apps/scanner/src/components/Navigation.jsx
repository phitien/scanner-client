import React from 'react'
import CoreComponent from '../core/CoreComponent'

export default class Navigation extends CoreComponent {
    get mainClassName() {return 'navbar navbar-default navbar-pf'}
    render() {
        return <nav className={this.className} role="navigation">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">
              <img src="static/images/logo/logo.gif" alt="Scanner Application"/>
            </a>
          </div>
          <div className="collapse navbar-collapse navbar-collapse-1">
            <ul className="nav navbar-nav navbar-utility">
              <li>
                <a href="#">Status</a>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <span className="pficon pficon-user"></span>
                  Brian Johnson <b className="caret"></b>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">Link</a>
                  </li>
                  <li>
                    <a href="#">Another link</a>
                  </li>
                  <li>
                    <a href="#">Something else here</a>
                  </li>
                  <li className="divider"></li>
                  <li className="dropdown-submenu">
                    <a tabIndex="-1" href="#">More options</a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#">Link</a>
                      </li>
                      <li>
                        <a href="#">Another link</a>
                      </li>
                      <li>
                        <a href="#">Something else here</a>
                      </li>
                      <li className="divider"></li>
                      <li className="dropdown-header">Nav header</li>
                      <li>
                        <a href="#">Separated link</a>
                      </li>
                      <li className="divider"></li>
                      <li>
                        <a href="#">One more separated link</a>
                      </li>
                    </ul>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <a href="#">One more separated link</a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-primary">
              <li>
                <a href="basic.html">Basic</a>
              </li>
              <li>
                <a href="bootstrap-treeview-2.html">Tree View</a>
              </li>
              <li className="active">
                <a href="dashboard.html" className="active">Dashboard</a>
              </li>
              <li>
                <a href="form.html">Form</a>
              </li>
              <li>
                <a href="tab.html">Tab</a>
              </li>
              <li>
                <a href="typography-2.html">Typography</a>
              </li>
              <li>
                <a href="card-view-multi-select.html">Card View - Multi Select</a>
              </li>
              <li>
                <a href="card-view-single-select.html">Card View - Single Select</a>
              </li>
              <li>
                <a href="cards.html">Cards</a>
              </li>
              <li>
                <a href="pagination-card-view.html">Pagination - Card View</a>
              </li>
            </ul>
          </div>
        </nav>
    }
}
