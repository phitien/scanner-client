import React from 'react'
import CoreComponent from '../core/CoreComponent'
import CorePageNoSidebar from '../core/CorePageNoSidebar'
import DashboardContent from './DashboardContent'

export default class DashboardPage extends CoreComponent {
    get mainClassName() {return 'scanner-page scanner-dashboard-page'}
    get content() {return <DashboardContent params={this.props.params}/>}
    render() {
        return <CorePageNoSidebar renderer={this} className={this.className}/>
    }
}
