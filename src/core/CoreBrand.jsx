import React from 'react'
import CoreComponent from './CoreComponent'

export default class CoreBrand extends CoreComponent {
    render() {
        return <div id="brand">
            <div className="app-name">Scanner</div> - <div className="scb-text">Standard Chartered Bank</div>
        </div>
    }
}
