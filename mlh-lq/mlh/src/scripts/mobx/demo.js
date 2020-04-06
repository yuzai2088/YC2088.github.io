import { observable, action, computed, autorun } from "mobx"

class Demo {
    @observable count = 3235
    @observable city = "午安"


    @action countadd = () => {
        console.log(this.count)
        this.count++
    }

    @action countdes = () => {
        this.count--   
    }

    @action changcount = (pl)=>{
        this.count+=pl
    }

    @action changcity =(pl)=>{
        this.city =pl
    }

    @computed get newcount() {
        return this.count + 4
    }

}

export default new Demo;