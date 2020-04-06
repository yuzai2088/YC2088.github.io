export default {
    state: {
      shopList:[],
      shoppingflag:true
    },
    mutations: {
        initshopList(state,list){
          state.shopList = list;
        },
        changeshopflag(state,flag){
            // if(state.shopList.length == 0){
                state.shoppingflag = flag
            // }else{
            //     state.flag = flag
            // }
        },
    

    },
    actions: {
       
    },
  }