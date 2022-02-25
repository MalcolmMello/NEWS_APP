import * as C from './styles'
import { NewsArea } from '../../components/NewsArea/NewsArea'
import { TopHome } from '../../components/HomeTop/TopHome'


export const Home = () => {
    return (
        <C.Home>
            <TopHome />
            <NewsArea />
        </C.Home>
    )
}