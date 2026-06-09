

export const EMPLOYEE_ACTION_TYPES = {
    ADD:"employee/ADD",
    DELETE: "employee/DELETE",
    UPDATE: "employee/UPDATE"
} as const;



export const addEmployeeActionCreator = (employee: Employee)=> {
    return {
        type: EMPLOYEE_ACTION_TYPES.ADD,
        payload: employee,
    };
};



interface Employee{
  name: string,
  id: string,
  dateofjoining: string,
  role: "Full Stack" | "UI Engineer" | "Devops" ,
  status: "Probation" | "Active" | "Inactive",
  experience: string
}




export const initialEmployees: Employee[] = [
  {name:"Vishal M",      id:"Lazada", dateofjoining:"12.04.2021", role:"Full Stack",  status:"Probation", experience:"5 Years"},
  {name:"Susan Kurian",  id:"XYZ",    dateofjoining:"12.04.2021", role:"UI Engineer", status:"Probation", experience:"7 Years"},
  {name:"Yugesh",        id:"XYZ",    dateofjoining:"12.04.2021", role:"Devops",      status:"Active",    experience:"6 Years"},
  {name:"Midhun",        id:"Lazada", dateofjoining:"12.04.2021", role:"Full Stack",  status:"Active",    experience:"5 Years"},
  {name:"Abhijith",      id:"XYZ",    dateofjoining:"12.04.2021", role:"UI Engineer", status:"Inactive",  experience:"7 Years"},
  {name:"Fayis",         id:"Lazada", dateofjoining:"12.04.2021", role:"Full Stack",  status:"Active",    experience:"5 Years"},
  {name:"Aiswarya",      id:"XYZ",    dateofjoining:"12.04.2021", role:"Devops",      status:"Active",    experience:"6 Years"},
  {name:"Vennila",       id:"XYZ",    dateofjoining:"12.04.2021", role:"UI Engineer", status:"Active",    experience:"7 Years"},
  {name:"Stephen John",  id:"XYZ",    dateofjoining:"12.04.2021", role:"Devops",      status:"Active",    experience:"6 Years"},
  {name:"Monica",        id:"Lazada", dateofjoining:"12.04.2021", role:"Full Stack",  status:"Active",    experience:"5 Years"},
  {name:"Rachel",        id:"XYZ",    dateofjoining:"12.04.2021", role:"UI Engineer", status:"Active",    experience:"7 Years"},
];


type EmployeeState={
    employees:Employee[]
}

type EmployeeAction={
    type:any,
    payload:Employee
}

let initialState={
    employees:initialEmployees
}



export const reducer = (
    state:EmployeeState = initialState,
    action: EmployeeAction
):EmployeeState => {
    switch (action.type) {
        case EMPLOYEE_ACTION_TYPES.ADD: {
            // const record = employeeFromFormToRecord(
            //     action.payload,
            //     nextEmployeeId(state.employees)
            // );
            const record = action.payload
            return {...state, employees: [...state.employees, record]};

        }
        default:
            return state;
    }
};
