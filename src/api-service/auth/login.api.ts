import employeeBaseApi from "../../api-service/api";

export const loginApi = employeeBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<any, any>({
      query: (payload) => ({
        url: "/auth/login",
        method: "POST",
        body: payload
      }),
    }),
  }),
});

export const { useLoginMutation } = loginApi;