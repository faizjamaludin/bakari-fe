import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const posApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}` }),
    tagTypes: ["Category"],
    endpoints: () => ({}),
});

export const { } = posApi