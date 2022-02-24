export interface Article {
    copyright: string,
    num_results: string,
    results: {
        section: string,
        subsection: string,
        title: string,
        abstract: string,
        url: string,
        byline: string,
        published_date: string,
        multimedia: [{
            url: string,
            height: string,
            width: string,
            caption: string,
            copyright: string
        }],
        short_url: string
    }[]
}
