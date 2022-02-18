import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const newsApiParams = {
    'api-key': 'AChE2yA8AIHmP5fGj5GoUj4vd1hdaozc'
}

const baseUrl = 'https://api.nytimes.com/svc/topstories/v2'

const createRequest = (url: string) => ({ url, params: newsApiParams })

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getHomeNews: builder.query({
            query: () => createRequest('/home.json')
        })
    })
})

export const { useGetHomeNewsQuery } = newsApi