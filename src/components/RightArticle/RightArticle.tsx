import * as C from './styles'

interface RightArticleTS {
    short_url: string,
    subsection: string,
    title: string,
    month: string,
    day: string,
    year: string,
    picture: string,
    marginTop?: boolean
}

export const RightArticle = ({short_url, subsection, title, month, day, year, picture, marginTop}: RightArticleTS) => {
    
    return (
        <C.RightArticle href={short_url} target='_blank' mainBackground={picture} marginTop={marginTop}>
            <div className='main--picture'>
                <div className='article--content'>
                    <p>{subsection.toUpperCase()}</p>
                    <h5>{title}</h5>
                    <div className='published--data'>
                        <small>
                        published in {month}-{day}-{year}
                        </small>
                    </div>
                </div>
            </div>
        </C.RightArticle>
    )
}