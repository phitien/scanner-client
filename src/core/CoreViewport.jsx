import React from 'react'
import CoreComponent from './CoreComponent'
import CoreErrorModal from './CoreErrorModal'

class CoreViewport extends CoreComponent {
    get header() {return null}
    get footer() {return null}
    get mainClassName() {return 'viewport'}
    get viewportClassName() {return ''}
    get viewportBody() {return <div key={1} className={this.className}>{this.props.children}</div>}
    componentDidMount() {
        this.authStore.addChangeListener(this.refresh)
    }
    componentWillUnmount() {
        this.authStore.removeChangeListener(this.refresh)
    }
    render() {
        return <div className={`page ${this.viewportClassName}`}>
            {this.header}
            {this.viewportBody}
            {this.footer}
        </div>
    }
}
export default CoreViewport
