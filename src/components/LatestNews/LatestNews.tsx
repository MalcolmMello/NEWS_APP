import * as C from './styles'
import { LeftNews } from '../LeftNews/LeftNews'
import { RightNews } from '../RightNews/RightNews'
import { useGetHomeNewsQuery } from '../../api/NewsApi'
import { ArticleResults } from '../../types/Article'

export const LatestNews = () => {
    const { data } = useGetHomeNewsQuery('arg')   
    
    const renderLeftLatestNews = (item: ArticleResults) => (
        <LeftNews
            key={item.title}
            url={item.url}
            imgUrl={item.multimedia[0].url}
            caption={item.multimedia[0].caption}
            subsection={item.subsection}
            title={item.title}
            abstract={item.abstract}
            published_date={item.published_date}
        />
    )

    const renderRightLatestNews = (item: ArticleResults) => (
        <RightNews
            key={item.title}
            url={item.url}
            imgUrl={item.multimedia[0].url}
            caption={item.multimedia[0].caption}
            subsection={item.subsection}
            title={item.title}
            abstract={item.abstract}
            published_date={item.published_date}
        />
    )

    return (    
        <C.LatestNews>
            <h1>Latest News</h1>
            <div className='content--area'>
               <article>
                    {data?.results.slice(3, 7).map(renderLeftLatestNews)}
               </article>
                <aside>
                    {data?.results.slice(7, 15).map(renderRightLatestNews)}
                </aside> 
            </div>
        </C.LatestNews>
    )
}