import * as C from './styles'
import { formatDay, formatMonth, formatYear } from '../../helpers/dataConfig'

interface RightNewsTS {
    imgUrl?: string,
    url: string,
    caption: string,
    subsection?: string,
    title: string,
    abstract: string,
    published_date: string,
    isSectionArea?: boolean,
    content?: string
}

export const RightNews = ({url, imgUrl, caption, subsection, title, published_date, isSectionArea, content}: RightNewsTS) => {
    const time = published_date !== undefined ? new Date(published_date) : new Date()
    const month = formatMonth(time)
    const day = formatDay(time)
    const year = formatYear(time)
    
    return (
        <C.RightNews isSec={isSectionArea}>
            <a href={url} target='_blank'>
                {imgUrl && <img src={imgUrl} alt={caption} />}
                <div className='content'>
                    {subsection && <span>{subsection.toUpperCase()}</span>}
                    <h5>{title}</h5>
                    {content &&
                        <p>{content}</p>
                    }
                    <small>{`published in ${month}/${day}/${year}`}</small>
                </div>
            </a>
        </C.RightNews>
    ) 
}