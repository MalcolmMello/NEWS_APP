import * as C from './styles'

interface RightArticle {
    short_url: string | undefined,
    subsection: string | undefined,
    title: string | undefined,
    month: string | undefined,
    day: string | undefined,
    year: string | undefined,
    picture: string | undefined
}

export const RightArticle = ({short_url, subsection, title, month, day, year, picture}: RightArticle) => {
    return (
        <C.RightArticle href={short_url} target='_blank' mainBackground={picture}>
            <article className='main--picture'>
                <div className='article--content'>
                    <p>{subsection?.toUpperCase()}</p>
                    <h5>{title}</h5>
                    <div className='published--data'>
                        <small>
                        published in {month}-{day}-{year}
                        </small>
                    </div>
                </div>
            </article>
        </C.RightArticle>
    )
}