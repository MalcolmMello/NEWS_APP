import * as C from './styles'

interface LeftArticle {
    short_url: string,
    subsection: string,
    title: string,
    month: string,
    day: string,
    year: string,
    picture: string 
}

export const LeftArticle = ({short_url, subsection, title, month, day, year, picture}: LeftArticle) => {
    return (
        <C.LeftArticle href={short_url} target='_blank' mainBackground={picture}>
            <article className='main--picture'>
                <div className='article--content'>
                    <p>{subsection.toUpperCase()}</p>
                    <h1>{title}</h1>
                    <div className='published--data'>
                        <small>
                        published in {month}-{day}-{year}
                        </small>
                    </div>
                </div>
            </article>
        </C.LeftArticle>
    )
}