import * as C from './styles'
import { formatDay, formatMonth, formatYear } from '../../helpers/dataConfig'
import { useGetHomeNewsQuery } from '../../api/NewsApi'
import { LeftArticle } from '../../components/LeftArticle/LeftArticle'


export const Home = () => {
    const { data, isFetching } = useGetHomeNewsQuery('')
    if(isFetching) return <>Loading...</>
    const firstResults = data?.results[0]
    const secondResults = data?.results[1]
    const thirdResults = data?.results[2]


    const published = firstResults?.published_date
    const time = published !== undefined ? new Date(published) : new Date()

    const getMonth = formatMonth(time)
    const getDay = formatDay(time)
    const getYear = formatYear(time)

    return (
        <C.Home>
            <section className='container'>
                <LeftArticle
                    short_url={firstResults?.short_url}
                    subsection={firstResults?.subsection}
                    title={firstResults?.title}
                    month={getMonth}
                    day={getDay}
                    year={getYear}
                    picture={firstResults?.multimedia[0].url}
                />
                <article className='aside--pictures'>
                    <img src="" alt="" />
                    <img src="" alt="" />
                </article>
            </section>
        </C.Home>
    )
}