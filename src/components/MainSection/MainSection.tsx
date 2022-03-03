import * as C from './styles'
import { ArticleResults } from '../../types/Article'
import { useGetNewsBySectionQuery } from '../../api/NewsApi'
import { LeftNews } from '../LeftNews/LeftNews'
import { RightNews } from '../RightNews/RightNews'

interface SectionProps {
    title: string
}

export const MainSection = ({title}: SectionProps) => {
    const { data } = useGetNewsBySectionQuery(title)   
    const firstResult = data?.results[0]
    const secondResult = data?.results[1]

    const renderLeftNews = () => {
        if(firstResult) {
            return (
                <LeftNews
                    key={firstResult.title}
                    url={firstResult.url}
                    imgUrl={firstResult.multimedia[0].url}
                    caption={firstResult.multimedia[0].caption}
                    subsection={firstResult.subsection}
                    title={firstResult.title}
                    abstract={firstResult.abstract}
                    published_date={firstResult.published_date}
                    isSectionArea={true}
                />
            )
        }
    }

    const renderRightNews = () => {
        if(secondResult) {
            return (
                <RightNews
                    key={secondResult.title}
                    url={secondResult.url}
                    imgUrl={secondResult.multimedia[0].url}
                    caption={secondResult.multimedia[0].caption}
                    subsection={secondResult.subsection}
                    title={secondResult.title}
                    abstract={secondResult.abstract}
                    published_date={secondResult.published_date}
                    content={secondResult.abstract}
                    isSectionArea={true}
                />
            )
        }
    }

    const renderCenterNews = (item: ArticleResults, i: any) => {
        if(i === 0) {
            return (
                <RightNews 
                    key={item.title}
                    url={item.url}
                    caption={item.multimedia[0].caption}
                    title={item.title}
                    abstract={item.abstract}
                    published_date={item.published_date}
                    content={item.abstract}
                    isSectionArea={true}
                />
            )
        } if(i === 1) {
            return (
                <RightNews
                    key={item.title}
                    url={item.url}
                    imgUrl={item.multimedia[0].url}
                    caption={item.multimedia[0].caption}
                    subsection={item.subsection}
                    title={item.title}
                    abstract={item.abstract}
                    published_date={item.published_date}
                    isSectionArea={true}
                />
            )
        }
    }

    return (
        <C.MainSection>
            <h1>{title}</h1>
            <div className='container'>
                <div>{renderLeftNews()}</div>
                <div>
                    {data?.results.slice(2, 4).map(renderCenterNews)}
                </div>
                {renderRightNews()}
            </div>
        </C.MainSection>
    )
}