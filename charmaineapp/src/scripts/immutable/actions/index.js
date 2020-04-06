
import {axios} from "&"

export const countAdd = {
    type:"countAdd"
}

export function countDesc(){
    return {
        type:"countDesc"
    }
}



export function changeCount(payload){
    return {
        type:"changeCount",
        payload
    }
}

export function changeCity(payload){
    return {
        type:"changeCity",
        payload
    }
}


export function changeMsg(payload){
    return {
        type:"changeMsg",
        payload
    }
}



export async  function getMVAsync({url}){
    const res = await axios.get(url);
    return {
        type:"getMVAsync",
        payload:res.data.playlists
    }
}

