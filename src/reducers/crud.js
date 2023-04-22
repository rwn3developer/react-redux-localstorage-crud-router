const initialState = {
    data : localStorage.getItem('crud') ? JSON.parse(localStorage.getItem('crud')) : []
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

            default : 
                return state;
        }
}

export default crud;