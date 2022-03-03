import { useRoutes } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { Sections } from '../pages/Sections/Sections'

export const MainRoutes = () => {

    return useRoutes([
        { path: '/', element: <Home /> },
        { path: '/Sections/:section', element: <Sections /> }
    ])
}