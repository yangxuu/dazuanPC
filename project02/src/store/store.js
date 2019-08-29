import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        loading: false
    },
    mutations: {
        loading_show(state) {
            state.loading = true
        },
        loading_hide(state) {
            state.loading = false
        },
    }
})
