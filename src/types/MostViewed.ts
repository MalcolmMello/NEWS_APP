export interface MostViewed {
    copyright: string,
    num_results: string,
    results: {
        title: string,
        section: string,
        url: string,
        published_date: string,
        asset_id: number
    }[]
}

export interface ResultsMostViewed {
    title: string,
    section: string,
    url: string,
    published_date: string,
    asset_id: number
}