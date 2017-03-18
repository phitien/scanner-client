import {Router} from 'react-router'
import {onEnterRequireLoggingIn, onEnterNoRequireLoggingIn} from './core/CoreApplication'
import CoreViewport from './core/CoreViewport'
import DashboardPage from './components/DashboardPage'
/**NEW_PAGE**/

const rootPaths = ['/']
const subRoutes = [
/**NEW_PAGE_ROUTE**/
]
const routes = []

rootPaths.map(root => {
    routes.push({
        path: root,
        component: CoreViewport,
        indexRoute: {
            component: DashboardPage
        },
        childRoutes: subRoutes,
        onEnter: onEnterRequireLoggingIn,
    })
})

export default routes
