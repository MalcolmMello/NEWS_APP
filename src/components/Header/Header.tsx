import * as C from './styles'
import { Link } from 'react-router-dom'
import newsimg from '../../assets/news.png'

interface Menu {
    pathName: string,
    path: string
}

export const Header = () => {
    const menu = [
        {pathName: 'Home', path:'/'}
    ]

    const renderMenu = (item: Menu) => (
        <Link key={item.pathName} to={item.path}>
            {item.pathName}
        </Link>
    )

    return (
        <C.Header>
            <div className='container'>
                <div className='img--area'>
                    <img src={newsimg} alt='gamersnews-logo'/>
                </div>
                <nav className='menu--area'>
                    <ul>
                        {menu.map(renderMenu)}
                    </ul>
                </nav>
            </div>
        </C.Header>
    )
}