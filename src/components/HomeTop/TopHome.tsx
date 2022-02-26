import * as C from './styles'
import { useGetHomeNewsQuery } from '../../api/NewsApi'
import { LeftArticle } from '../../components/LeftArticle/LeftArticle'
import { RightArticle } from '../../components/RightArticle/RightArticle'

export const TopHome = () => {
    const { data } = useGetHomeNewsQuery('arg')   

    const firstResults = data?.results[0]
    const secondResults = data?.results[1]
    const thirdResults = data?.results[2]
    
    const allResults = firstResults && secondResults && thirdResults
    
    return (
        <C.TopHome>
            {allResults ? (
                <>
                    <LeftArticle
                        short_url={firstResults.short_url}
                        subsection={firstResults.subsection}
                        title={firstResults.title}
                        picture={firstResults.multimedia[0].url}
                        published_date={firstResults?.published_date}
                    />
                    <aside className='aside--pictures'>
                        <RightArticle
                            short_url={secondResults.short_url}
                            subsection={secondResults.subsection}
                            title={secondResults.title}
                            picture={secondResults.multimedia[1].url}
                            published_date={secondResults?.published_date}
                        />
                        <RightArticle
                            short_url={thirdResults.short_url}
                            subsection={thirdResults.subsection}
                            title={thirdResults.title}
                            picture={thirdResults.multimedia[1].url}
                            published_date={thirdResults?.published_date}
                            marginTop={true}
                        />
                    </aside>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </C.TopHome>
    )
}