import React from 'react'
import CoreApplication from './core/CoreApplication'

export default class Application extends CoreApplication {
    afterRender = () => {
        this.util.addAppStylesAndJSScripts()
    }
}
