import * as C from './styles'
import { MostComponent } from '../MostComponent/MostComponent'
import { ResultsMostViewed } from '../../types/MostViewed'
import { useGetMostViewedQuery } from '../../api/NewsApi'

export const MostViewed = () => {
    const { data } = useGetMostViewedQuery('arg') 

    const renderMostViewed = (item: ResultsMostViewed, i: number) => (
        <MostComponent
            key={item.asset_id}
            title={item.title}
            section={item.section}
            url={item.url}
            published_date={item.published_date}
            position={i+1}
        />
    )
    return (
        <C.MostViewed>
            <h1>Most Viewed</h1>
            <div className='content--area'>
                <article>
                    {data?.results.map(renderMostViewed)}
                </article>
            </div>
        </C.MostViewed>
    )
}