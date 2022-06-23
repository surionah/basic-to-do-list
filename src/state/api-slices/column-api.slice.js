import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ColumnApi = createApi({
  reducerPath: 'columns',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3002/' }),
  endpoints: (builder) => ({
    getColumns: builder.query({
      query: () => 'columns/',
      providesTags: ['columns'],
    }),
    createColumn: builder.mutation({
      query: (column) => ({
        url: 'columns',
        method: 'POST',
        body: column,
      }),
      invalidatesTags: ['columns'],
    }),
    editColumn: builder.mutation({
      query: (column) => ({
        url: `columns/${column.id}`,
        method: 'PATCH',
        body: column,
      }),
      invalidatesTags: ['columns'],
    }),
    deleteColumn: builder.mutation({
      query: (id) => ({
        url: `columns/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['columns'],
    }),
  }),
})

export const {
  useGetColumnsQuery,
  useCreateColumnMutation,
  useEditColumnMutation,
  useDeleteColumnMutation,
} = ColumnApi
