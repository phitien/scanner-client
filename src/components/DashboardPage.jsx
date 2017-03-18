import React from 'react'
import CoreComponent from '../core/CoreComponent'
import CorePageNoSidebar from '../core/CorePageNoSidebar'
import DashboardContent from './DashboardContent'

export default class DashboardPage extends CoreComponent {
    get mainClassName() {return ''}
    get content() {return <DashboardContent params={this.props.params}/>}
    componentDidMount() {
        jQuery('html').addClass('layout-pf layout-pf-fixed')
        jQuery('body').addClass('cards-pf')
    }
    render() {
        return <CorePageNoSidebar renderer={this} className={this.className}/>
    }
}
