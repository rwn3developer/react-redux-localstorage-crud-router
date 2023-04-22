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