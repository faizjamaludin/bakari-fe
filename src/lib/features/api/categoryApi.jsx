import { posApi } from "./posApi";

posApi.enhanceEndpoints({ addTagTypes: ["Category"] });

const categoryApi = posApi.injectEndpoints({
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (data) => ({
        url: `category/create`,
        method: "POST",
        body: data,
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: (result, error, id) => [{ type: "Category" }],
    }),
    getCategories: builder.query({
      query: () => ({
        url: `category/all`,
      }),
      transformResponse: (response) => response,
      providesTags: (result) => [{ type: "Category" }],
    }),
  }),
});

export const { useCreateCategoryMutation, useGetCategoriesQuery } = categoryApi;
