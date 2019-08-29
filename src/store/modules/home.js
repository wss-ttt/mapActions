import request from '@/utils/request.js'
export default {
    namespaced: false,
    state: {
        users: [],  // 保存用户数据
    },
    getters: {

    },
    actions: {
        loadMore({ commit, state }) {
            request({
                url: 'http://localhost:3000/users/list',
                method: 'get'
            }).then(( data ) => {
                // commit('loadMore', data)
                // 第二种写法 对象提交
                commit({
                    type: 'loadMore',
                    res: data
                })
            })
        },
        
    },
    mutations: {
        /* loadMore(state, data) {
            console.log(data)
        } */

        // 对应着第二种写法啊
        loadMore(state, playload) {
            console.log(playload)
            state.users = playload.res
        }
    }
}