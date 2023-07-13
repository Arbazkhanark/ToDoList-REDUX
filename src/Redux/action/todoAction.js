export const todoAdd=(task)=>{
    return {type:"ADD",payload:task};
}


export const deleteItem=(index)=>{
    return {type:"DELETE",payload:index};
}