import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Article } from '../types/Article'
import { MostViewed } from '../types/MostViewed'

const newsApiParams = {
    'api-key': process.env.REACT_APP_API_KEY
}

const baseUrl = 'https://api.nytimes.com/svc'

const createRequest = (url: string) => ({ url, params: newsApiParams })

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getHomeNews: builder.query<Article, string>({
            query: () => createRequest('/topstories/v2/home.json')
        }),
        getNewsBySection: builder.query<Article, string>({
            query: (section) => createRequest(`/topstories/v2/${section}.json`)
        }),
        getMostViewed: builder.query<MostViewed, string>({
            query: () => createRequest('/mostpopular/v2/viewed/7.json')
        })
    })
})

export const { useGetHomeNewsQuery, useGetMostViewedQuery, useGetNewsBySectionQuery } = newsApi 