
import immutable from "immutable";
const defaultState = immutable.fromJS({
    count:2020,
    city:"黄石大冶...",
    msg:"Are you OK"
})

export const data = (state = defaultState ,action)=>{
    console.log(action);

    switch(action.type){
        case "countAdd":
        // return state.set("count",++state.toJS().count);
        return state.set("count",state.get("count")+1)
        break;

        case "countDesc":
        return state.update("count",(x)=>(x-1))
        break;

        case "changeCount":
        return state.update("count",x=>x+action.payload)
        break;

        case "changeCity":
        return state.set("city",action.payload);
        break;

        case "changeMsg":
        return state.set("msg",action.payload);
        break;
        
        default:
        return state;
        break;
    }
}