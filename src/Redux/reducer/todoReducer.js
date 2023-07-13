export const list=[]

export const todoReducer=(state=list,action)=>{
    switch(action.type){
        case "ADD":return [...state,action.payload];
        case "DELETE":{
            state.splice(action.payload,1);
            return [...state];
        }
        default: return state;
    }
}