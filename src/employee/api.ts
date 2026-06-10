	
import employeeBaseApi from '../api-service/api';
 
export const employeeApi = employeeBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployees: builder.query<any,void>({
        query: () => 'employee/',
        providesTags: ['Employees'],
        }),
    createEmployee: builder.mutation<any, any>({
      query: (employee) => ({
        url: "employee",
        method: "POST",
        body: employee,
          }),
        invalidatesTags: ["Employees"],
        }),
    getEmployeeById: builder.query<any,number>({
        query: (id) => `employee/${id}`
    }),
    updateEmployee: builder.mutation({
        query: ({id,...body}) => ({
            url: `/employee/${id}`,
            method: 'PATCH',
            body,
        }),
        invalidatesTags: ['Employees']
    }),
    deleteEmployee: builder.mutation({
    query: (id) => ({
        url: `employee/${id}`,
        method: 'DELETE'
    }),
    invalidatesTags: ['Employees']
    })



    })
});

	
export const {
  useGetEmployeesQuery,
  useCreateEmployeeMutation,
  useGetEmployeeByIdQuery,
  useUpdateEmployeeMutation,
  useDeleteEmployeeMutation
} = employeeApi;

// const { data = [], isLoading, error } = useGetEmployeesQuery();
