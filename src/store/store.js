import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

import { httpInstance } from "../utils/request.js"
import router from "../router/router"
import {getCookie} from "../utils/utils"
let store = new Vuex.Store({
    state: {
        classifyData: {},
        cartList:[]
    },
    mutations: {
        updateList(state, payload) {
            let o = { ...state.classifyData }
            o[payload.id] = payload.data.secondLevelCategories
            state.classifyData = o
        },
        updateCartList(state,payload){
            state.cartList = payload
        }
    },
    actions: {
        fetchList({ state, commit }, cid) {
            if (!state.classifyData[cid]) {
                httpInstance.get(`/api/classify?cid=${cid}`).then(res => {
                    //this.list = res.secondLevelCategories
                    commit('updateList', {
                        id: cid,
                        data: res
                    })
                })
            }
        },
        fetchCartList({ commit }) {
            httpInstance.post('/api/goodslist', {
                    token: getCookie('token')
                }).then(res => {
                    console.log(res)
                    if (res.code == 0) {
                        if ((confirm("登录超时，请重新登录"))) {
                            router.push({
                                name: "login",
                                query: {
                                    from: "cart"
                                }
                            })
                        } else {

                        }
                    } else {
                         commit("updateCartList",res.data)
                       // this.data = res.data
                    }
                })
           
        }
    },
    getters: {},
    modules: {}
})

store.subscribe(() => {
    console.log(store.state.classifyData)
})

export default store