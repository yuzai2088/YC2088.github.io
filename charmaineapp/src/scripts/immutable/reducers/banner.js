
import immutable from "immutable";

const defaultState = immutable.fromJS({
    mv:[]
})

export const  banner = (state=defaultState,action )=>{
    switch(action.type){
        case "getMVAsync":
        console.log(action.payload);
        return state.set("mv",action.payload);
        break;
        
        default:
        return state
        break;
    }
}