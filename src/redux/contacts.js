import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://625ec131873d6798e2ad6349.mockapi.io/api/v1';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts',
    }),
  }),
});

export const { useGetContactsQuery } = contactsApi;
