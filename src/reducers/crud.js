const initialState = {
    data : localStorage.getItem('crud') ? JSON.parse(localStorage.getItem('crud')) : [],
    user : {}
}

const crud = (state = initialState,action) =>
{
        switch(action.type)
        {
            case "ADD_DATA" :
                let save = [...state.data,action.payload];
                localStorage.setItem('crud',JSON.stringify(save));
                return {
                    ...state,
                    data : save
                }
            break;

            case "DELETE_DATA" : 
                let drecord = state.data.filter((val)=>{
                    return val.id !== action.payload
                })
                localStorage.setItem('crud',JSON.stringify(drecord));
                return {
                    ...state,
                    data : drecord
                }
            break;

            case "EDIT_TIME" : 
                    let editr = state.data.filter((val)=>{
                       if(val.id == action.payload){
                            return val;
                       }
                    })
                    return {
                        ...state,
                        user : editr[0]
                    }
                    return state;
            break;

            case "UPDATE_DATA" : 
                    let update = state.data.map((val)=>{
                        if(val.id == action.payload.id){ 
                            return {
                                ...val,
                                name : action.payload.name,
                                email : action.payload.email,
                                password : action.payload.password,
                            }
                        }
                        return val;
                    })
                    localStorage.setItem('crud',JSON.stringify(update));
                    return {
                        ...state,
                        data : update
                    };
            break;

            default : 
                return state;
        }
}

export default crud;