import React from 'react'
import CoreComponent from '../core/CoreComponent'

export default class LeftNavigation extends CoreComponent {
    render() {
        return <div className="nav-pf-vertical nav-pf-vertical-with-sub-menus">
          <ul className="list-group">
            <li className="list-group-item">
              <a>
                <span className="fa fa-dashboard" data-toggle="tooltip" title="" data-original-title="Dashboard"></span>
                <span className="list-group-item-value">Dashboard</span>
              </a>
            </li>
            <li className="list-group-item">
              <a>
                <span className="fa fa-shield" data-toggle="tooltip" title="" data-original-title="Dolor"></span>
                <span className="list-group-item-value">Dolor</span>

              </a>
            </li>
            <li className="list-group-item active " data-target="#ipsum-secondary">
              <a>
                <span className="fa fa-space-shuttle" data-toggle="tooltip" title="" data-original-title="Ipsum"></span>
                <span className="list-group-item-value">Ipsum</span>
              </a>

            </li>
            <li className="list-group-item " data-target="#amet-secondary">
              <a>
                <span className="fa fa-paper-plane" data-toggle="tooltip" title="" data-original-title="Amet"></span>
                <span className="list-group-item-value">Amet</span>
              </a>

            </li>
            <li className="list-group-item">
              <a>
                <span className="fa fa-graduation-cap" data-toggle="tooltip" title="" data-original-title="Adipscing"></span>
                <span className="list-group-item-value">Adipscing</span>
              </a>
            </li>
            <li className="list-group-item">
              <a>
                <span className="fa fa-gamepad" data-toggle="tooltip" title="" data-original-title="Lorem"></span>
                <span className="list-group-item-value">Lorem</span>
              </a>
            </li>

            <li className="list-group-item secondary-nav-item-pf mobile-nav-item-pf visible-xs-block" data-target="#amet-secondary">
              <a>
                <span className="pficon pficon-user" data-toggle="tooltip" title="" data-original-title="User"></span>
                <span className="list-group-item-value">User</span>
              </a>
              <div id="user-secondary" className="nav-pf-secondary-nav">
                <div className="nav-item-pf-header">
                  <a className="secondary-collapse-toggle-pf" data-toggle="collapse-secondary-nav"></a>
                  <span>User</span>
                </div>

                <ul className="list-group">
                  <li className="list-group-item">
                    <a>
                      <span className="list-group-item-value">Preferences</span>
                    </a>
                  </li>

                  <li className="list-group-item">
                    <a>
                      <span className="list-group-item-value">Logout</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="list-group-item secondary-nav-item-pf mobile-nav-item-pf visible-xs-block" data-target="#amet-secondary">
              <a>
                <span className="pficon pficon-help" data-toggle="tooltip" title="" data-original-title="Amet"></span>
                <span className="list-group-item-value">Help</span>
              </a>
              <div id="help-secondary" className="nav-pf-secondary-nav">
                <div className="nav-item-pf-header">
                  <a className="secondary-collapse-toggle-pf" data-toggle="collapse-secondary-nav"></a>
                  <span>Help</span>
                </div>
                <ul className="list-group">
                  <li className="list-group-item">
                    <a>
                      <span className="list-group-item-value">Help</span>
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a>
                      <span className="list-group-item-value">About</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

          </ul>

        </div>
    }
}
