import * as C from './styles'

export interface MostComponentTS {
    title: string,
    section: string,
    url: string,
    published_date: string,
    position: number
}

export const MostComponent = ({title, section, url, published_date, position}: MostComponentTS) => {
    return (
        <C.MostComponent>
           <a href={url} target='_blank'>
                <p>{position < 10 ? `0${position}` : position}</p>
                <div>
                    <span>{section.toUpperCase()}</span>
                    <h5>{title}</h5>
                    <small>{published_date}</small>
                </div>
           </a>
        </C.MostComponent>
    )
}