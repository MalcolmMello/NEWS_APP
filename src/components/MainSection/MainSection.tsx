import * as C from './styles'
import { useGetNewsBySectionQuery } from '../../api/NewsApi'
import { ArticleResults } from '../../types/Article'
import { LeftArticle } from '../../components/LeftArticle/LeftArticle'
import { RightArticle } from '../../components/RightArticle/RightArticle'

interface SectionProps {
    title: string
}

export const MainSection = ({title}: SectionProps) => {
    const { data } = useGetNewsBySectionQuery(title)   
    const firstResult = data?.results[0]

    const renderLeftArticle = () => {
        if(firstResult) {
            return (
                <LeftArticle
                    key={firstResult.title}
                    short_url={firstResult.short_url}
                    subsection={firstResult.subsection}
                    title={firstResult.title}
                    picture={firstResult.multimedia[0].url}
                    published_date={firstResult.published_date}
                />
            )
        }
    }
    
    const renderRightArticle = (item: ArticleResults, i: any) => {
        return (
            <RightArticle
                key={item.title}
                short_url={item.short_url}
                subsection={item.subsection}
                title={item.title}
                picture={item.multimedia[1].url}
                published_date={item?.published_date}
                marginTop={i === 1 ? true : false}
            />
        )
    }

    return (
        <C.MainSection>
            {data ? (
                <>
                    <article className='main--picture'>
                        {renderLeftArticle()}
                    </article>
                    <aside className='aside--pictures'>
                        {data.results.slice(1, 3).map(renderRightArticle)}
                    </aside>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </C.MainSection>
    )
}