import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const CardApi = createApi({
  reducerPath: 'cards',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3002/' }),
  endpoints: (builder) => ({
    getCards: builder.query({
      query: () => 'cards/',
      providesTags: ['cards'],
    }),
    createCard: builder.mutation({
      query: (card) => ({
        url: 'cards',
        method: 'POST',
        body: card,
      }),
      invalidatesTags: ['cards'],
    }),
    editCard: builder.mutation({
      query: (card) => ({
        url: `cards/${card.id}`,
        method: 'PATCH',
        body: card,
      }),
      invalidatesTags: ['cards'],
    }),
    deleteCard: builder.mutation({
      query: (id) => ({
        url: `cards/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['cards'],
    }),
  }),
})

export const {
  useGetCardsQuery,
  useCreateCardMutation,
  useEditCardMutation,
  useDeleteCardMutation,
} = CardApi
