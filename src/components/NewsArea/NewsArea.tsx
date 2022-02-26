import * as C from './styles'
import { useGetHomeNewsQuery } from '../../api/NewsApi'


export const NewsArea = () => {
    const { data } = useGetHomeNewsQuery('arg')   

    return (
        <C.NewsArea>
            <article>
                <h1>Latest News</h1>
            </article>
            <aside>
                <h1>Most Viewed</h1>
            </aside>
        </C.NewsArea>
    )
}