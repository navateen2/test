import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
// import {composeWithDevTools} from "@redux-devtools/extension";
// import logger from "redux-logger";
import {reducer as employeeReducer} from "./employee/employee.types" ;

export type RootState = ReturnType<typeof rootReducer>;


const rootReducer=combineReducers({
    employee: employeeReducer,
    // department: departmentReducer,

});


const store = createStore(
    rootReducer,
    undefined,
)

export default store;
