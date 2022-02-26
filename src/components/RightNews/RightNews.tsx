import * as C from './styles'
import { formatDay, formatMonth, formatYear } from '../../helpers/dataConfig'

interface RightNewsTS {
    imgUrl: string,
    url: string,
    caption: string,
    subsection: string,
    title: string,
    abstract: string,
    published_date: string
}

export const RightNews = ({url, imgUrl, caption, subsection, title, published_date}: RightNewsTS) => {
    const time = published_date !== undefined ? new Date(published_date) : new Date()
    const month = formatMonth(time)
    const day = formatDay(time)
    const year = formatYear(time)
    
    return (
        <C.RightNews >
            <a href={url} target='_blank'>
                <img src={imgUrl} alt={caption} />
                <div className='content'>
                    <span>{subsection.toUpperCase()}</span>
                    <h5>{title}</h5>
                    <small>{`published in ${month}/${day}/${year}`}</small>
                </div>
            </a>
        </C.RightNews>
    ) 
}