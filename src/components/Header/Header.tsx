import * as C from './styles'
import { Link } from 'react-router-dom'
import newsimg from '../../assets/news.png'

export const Header = () => {
    
    return (
        <C.Header>
            <div className='container'>
                <div className='img--area'>
                    <img src={newsimg} alt='gamersnews-logo'/>
                </div>
                <nav className='menu--area'>
                    <ul>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </C.Header>
    )
}