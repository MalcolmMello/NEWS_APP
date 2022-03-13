import * as C from './styles'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import newsimg from '../../assets/news.png'
import { useState } from 'react'

interface Menu {
    pathName: string,
    path: string
}

export const Header = () => {
    const navigate = useNavigate()

    const menu = [
        {pathName: 'Home', path:'/'},
        {pathName: 'Business', path:'/Sections/business'},
        {pathName: 'Politics', path:'/Sections/politics'},
        {pathName: 'Technology', path:'/Sections/technology'}
    ]

    const renderMenu = (item: Menu) => (
        <Link key={item.pathName} to={item.path}>
            {item.pathName}
        </Link>
    )

    const handleGetBackHome = () => {
        navigate('/')
    }

    return (
        <C.Header>
            <div className='container'>
                <div className='img--area'>
                    <img src={newsimg} alt='gamersnews-logo' onClick={handleGetBackHome}/>
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