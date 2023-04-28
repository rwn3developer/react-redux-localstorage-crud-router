export const Adddata = (data) => {
    return {
        type : "ADD_DATA",
        payload : data
    }
}

export const Deletedata = (id) => {
    return {
        type : "DELETE_DATA",
        payload : id
    }
}

export const Edittime = (id) => {
    return {
        type : "EDIT_TIME",
        payload : id
    }
}

export const Update = (data) => {
    return {
        type : "UPDATE_DATA",
        payload : data
    }
}