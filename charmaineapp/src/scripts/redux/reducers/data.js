
import { CHANGECOUNT, CHANGCITY, CHANGEMSG, CHANGEWORD, CHANGEINP, CHANGEMV } from "../actions";
const defaultState = {
    mv:[],
    inp:"1910-奋斗react",
    comments:[]
}


export const data = (state = defaultState ,action)=>{
    
    switch(action.type){
        
        case CHANGEINP:
        return {...state,inp:action.payload}
        break;

        case CHANGEMV:
        return {...state,mv:action.payload}
        break;

        case "changeMvAsync":
        return {...state,mv:action.payload}
        break;

        case "changeInpAsync":
        return {...state,inp:action.payload}
        break;

        case "getCommentsAsync":
        return {...state,comments:action.payload}
        break;
        
        
        default:
        return state;
        break;
    }
}