import * as C from './styles'
import { formatDay, formatMonth, formatYear } from '../../helpers/dataConfig'

interface LeftArticle {
    short_url: string,
    subsection: string,
    title: string,
    picture: string, 
    published_date: string
}

export const LeftArticle = ({short_url, subsection, title, picture, published_date}: LeftArticle) => {
    const time = published_date !== undefined ? new Date(published_date) : new Date()

    const month = formatMonth(time)
    const day = formatDay(time)
    const year = formatYear(time)

    return (
        <C.LeftArticle href={short_url} target='_blank' mainBackground={picture}>
            <article className='main--picture'>
                <div className='article--content'>
                    <p>{subsection.toUpperCase()}</p>
                    <h1>{title}</h1>
                    <div className='published--data'>
                        <small>
                            published in {month}/{day}/{year}
                        </small>
                    </div>
                </div>
            </article>
        </C.LeftArticle>
    )
}