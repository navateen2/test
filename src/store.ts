// import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux-toolkit";
// import {composeWithDevTools} from "@redux-devtools/extension";
// import logger from "redux-logger";
import {reducer as employeeReducer} from "./employee/employee.types" ;
import { configureStore } from "@reduxjs/toolkit";
import employeeBaseApi from "./api-service/api";

	
const store = configureStore({
    reducer: {
        employee: employeeReducer,
        [employeeBaseApi.reducerPath]: employeeBaseApi.reducer
        // department: departmentReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(employeeBaseApi.middleware),
});

export default store;
	
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
 
// export const useAppDispatch = () => useDispatch<AppDispatch>()
// export const useAppSelector = useSelector<RootState, any>