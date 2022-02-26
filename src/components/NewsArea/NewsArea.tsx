import * as C from './styles'
import { LatestNews } from '../LatestNews/LatestNews'
import { MostViewed } from '../MostViewed/MostViewed'

export const NewsArea = () => {

    return (
        <C.NewsArea>
            <LatestNews />
            <MostViewed />
        </C.NewsArea>
    )
}