import * as C from './styles'
import { formatDay, formatMonth, formatYear } from '../../helpers/dataConfig'

interface LeftNewsTS {
    imgUrl: string,
    url: string,
    caption: string,
    subsection: string,
    title: string,
    abstract: string,
    published_date: string
}

export const LeftNews = ({url, imgUrl, caption, subsection, title, abstract, published_date}: LeftNewsTS) => {
    const time = published_date !== undefined ? new Date(published_date) : new Date()
    const month = formatMonth(time)
    const day = formatDay(time)
    const year = formatYear(time)
    
    return (
        <C.LeftNews>
            <a href={url} target='_blank'>
                <img src={imgUrl} alt={caption} />
                {subsection && <span>{subsection.toUpperCase()}</span>}
                <h1>{title}</h1>
                <p>{abstract}</p>
                <small>{`published in ${month}/${day}/${year}`}</small>
            </a>
        </C.LeftNews>
    ) 
}