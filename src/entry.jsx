import './sass/styles.scss'

import React from 'react'
import Application from './App'
import Routes from './Routes'
import AppStore from './stores/AppStore'

const app = new Application(AppStore, Routes)
