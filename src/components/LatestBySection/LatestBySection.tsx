import * as C from './styles'
import defaultimg from '../../assets/defaultimg.jpg'
import { LeftNews } from '../LeftNews/LeftNews'
import { RightNews } from '../RightNews/RightNews'
import { useGetNewsBySectionQuery } from '../../api/NewsApi'
import { ArticleResults } from '../../types/Article'

interface LatestBySection {
    title: string
}

export const LatestBySection = ({title}: LatestBySection) => {
    const { data } = useGetNewsBySectionQuery(title)   
    const renderLeftLatestNews = (item: ArticleResults) => (
        <LeftNews
            key={item.title}
            url={item.url}
            imgUrl={item.multimedia ? item.multimedia[0].url : defaultimg}
            caption={item.multimedia ? item.multimedia[0].caption : ''}
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
            imgUrl={item.multimedia ? item.multimedia[0].url : ''}
            caption={item.multimedia ? item.multimedia[0].caption : ''}
            subsection={item.subsection}
            title={item.title}
            abstract={item.abstract}
            published_date={item.published_date}
        />
    )

    return (    
        <C.LatestBySection>
            <div className='container'>
                <h1>Latest News</h1>
                <div className='content--area'>
                <article>
                        {data?.results.slice(4, 7).map(renderLeftLatestNews)}
                </article>
                    <aside>
                        {data?.results.slice(8, 16).map(renderRightLatestNews)}
                    </aside> 
                </div>
            </div>
        </C.LatestBySection>
    )
}