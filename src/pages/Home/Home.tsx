import * as C from './styles'
import { useGetHomeNewsQuery } from '../../api/NewsApi'

export const Home = () => {
    const { data, isFetching } = useGetHomeNewsQuery('')

    if(isFetching) return <>Loading...</>

    const published = data?.results[0].published_date
    const time = published !== undefined ? new Date(published) : new Date()

    const getMonth = time.getMonth() < 10 ? `0${time.getMonth()}` : `${time.getMonth()}`
    const getDay = time.getDay() < 10 ? `0${time.getDay() + 1}` : `${time.getDay() + 1}`

    return (
        <C.Home mainBackground={data?.results[0].multimedia[0].url}>
            <section className='container'>
                <a href={data?.results[0].short_url} target="_blank">
                    <article className='main--picture'>
                        <div className='article--content'>
                            <p>{data?.results[0].subsection.toUpperCase()}</p>
                            <h1>{data?.results[0].title}</h1>
                            <div className='published--data'>
                                <small>
                                    published in {getMonth}-{getDay}-{time.getFullYear()}
                                </small>
                            </div>
                        </div>
                    </article>
                </a>
                <article className='aside--pictures'>
                    <img src="" alt="" />
                    <img src="" alt="" />
                </article>
            </section>
        </C.Home>
    )
}