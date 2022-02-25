import * as C from './styles'
import { useGetHomeNewsQuery } from '../../api/NewsApi'
import { formatDay, formatMonth, formatYear } from '../../helpers/dataConfig'
import { LeftArticle } from '../../components/LeftArticle/LeftArticle'
import { RightArticle } from '../../components/RightArticle/RightArticle'

export const TopHome = () => {
    const { data } = useGetHomeNewsQuery('')   

    const firstResults = data?.results[0]
    const secondResults = data?.results[4]
    const thirdResults = data?.results[5]
    
    const allResults = firstResults && secondResults && thirdResults

    const published = firstResults?.published_date
    const time = published !== undefined ? new Date(published) : new Date()

    const getMonth = formatMonth(time)
    const getDay = formatDay(time)
    const getYear = formatYear(time)
    
    return (
        <C.TopHome>
            {allResults ? (
                <>
                    <LeftArticle
                        short_url={firstResults.short_url}
                        subsection={firstResults.subsection}
                        title={firstResults.title}
                        month={getMonth}
                        day={getDay}
                        year={getYear}
                        picture={firstResults.multimedia[0].url}
                    />
                    <aside className='aside--pictures'>
                        <RightArticle
                            short_url={secondResults.short_url}
                            subsection={secondResults.subsection}
                            title={secondResults.title}
                            month={getMonth}
                            day={getDay}
                            year={getYear}
                            picture={secondResults.multimedia[1].url}
                        />
                        <RightArticle
                            short_url={thirdResults.short_url}
                            subsection={thirdResults.subsection}
                            title={thirdResults.title}
                            month={getMonth}
                            day={getDay}
                            year={getYear}
                            picture={thirdResults.multimedia[1].url}
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