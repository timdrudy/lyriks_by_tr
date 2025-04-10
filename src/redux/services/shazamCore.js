import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers) => {
                headers.set('x-rapidapi-key','ff73586d1dmsh4c6b4caac92d908p12ec08jsn2e94fb373f6c');

                return headers;
            },
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({ query: () => '/charts/world?country_code=DZ'}),
        }),
    });

    export const {
        useGetTopChartsQuery,
    } = shazamCoreApi;