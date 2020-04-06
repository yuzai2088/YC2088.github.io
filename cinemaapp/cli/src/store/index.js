
import { CHANGWORD, CHANGCITY } from "./type"

import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import { axios } from "@/utils"

const store = new Vuex.Store({
    state: {    // 状态 数据源  项目共享缓存的数据都存储在state 
        count: 2020,
        city: "武汉-黄石",
        msg: "wh1910-daydayup",
        word: "1910 精通 Vue",
        keyword: 'wh1910',
        data: {
            inp: "wh1910",
            mv: [],
            banner: [],
            hot:[],
            pre:[]
        },
        films: [],
        active: 0,
        citylist:[],
        cityInfo:{
            id:"",
            name:"武汉"
        }
    },

    getters: {
        newcount(state) {
            return state.count = 1911;
        },
        newmsg(state) {
            return state.msg + "哈哈哈"
        }
    },
    actions: {
        async getcitylistAsync({commit},{url}){
            let res = await axios.get(url);
            commit("getcitylistAsync",res.data.result);
        },
        countadd(context) {
            context.commit("countadd")
        },
        changCity(context, c) {
            context.commit("changMsg", c)
        },
        changMsgAsync({ commit }) {
            axios.get("/vue/index").then(res => {
                commit("cma", res.data)
            })
        },
        getMvAsync({ commit }, { url, limit }) {
            axios.get(url, { params: { limit } }).then(
                res => {
                    commit("getMvAsync", res.data.result)
                }
            )
        },
    },
    mutations: {
        changCityInfo(state,cityInfo){
            state.cityInfo=cityInfo;
        },
        getcitylistAsync(state,citylist){
            state.citylist=citylist;
        },
        getMvAsync(state, mv) {
            // Mutation 需遵守 Vue 的响应规则
            // state.data.mv = mv;   // 原有的旧的obj 操作  
            state.data = { ...state.data, mv: mv }; // 返回 新的 obj 
        },
        cma(state, ms) {
            state.msg = ms
        },

        countadd(state) {
            state.count++
        },
        changcount(state, n) {
            state.count += n
        },
        changmsg(state, w) {
            state.word = w
        },
        changMsg(state, m) {
            state.msg = m
        },

    }
});

export default store;