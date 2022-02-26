import * as C from './styles'
import { formatDay, formatMonth, formatYear } from '../../helpers/dataConfig'

interface RightArticleTS {
    short_url: string,
    subsection: string,
    title: string,
    picture: string,
    published_date: string,
    marginTop?: boolean
}

export const RightArticle = ({short_url, subsection, title, picture, published_date, marginTop}: RightArticleTS) => {
    const time = published_date !== undefined ? new Date(published_date) : new Date()

    const month = formatMonth(time)
    const day = formatDay(time)
    const year = formatYear(time)

    return (
        <C.RightArticle href={short_url} target='_blank' mainBackground={picture} marginTop={marginTop}>
            <div className='main--picture'>
                <div className='article--content'>
                    <p>{subsection.toUpperCase()}</p>
                    <h5>{title}</h5>
                    <div className='published--data'>
                        <small>
                            published in {month}/{day}/{year}
                        </small>
                    </div>
                </div>
            </div>
        </C.RightArticle>
    )
}