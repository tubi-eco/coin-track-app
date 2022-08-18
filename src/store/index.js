import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import vueAxios from "vue-axios";
Vue.use(Vuex);
Vue.use(vueAxios,axios);

export default new Vuex.Store({
  state: { 
    info: [],
    counter:1,
  },
  actions: {
    getDataUrl(context) {
      axios
      .get('https://api2.binance.com/api/v3/ticker/24hr')
      .then(response => {
        context.commit('getData', response.data);
        localStorage.setItem("apiDataLocalStorage", JSON.stringify(response.data));
      })
      .catch(error => {
        this.errors.push(error);
      })
    },
  },
  mutations: {
    getData(state, info) {
      state.info = info;
    },
    increment(state){ 
      state.counter++;
    },
    decrement(state){
      if(state.counter==0){
        state.counter;
      }
      else{
        state.counter--;
      }
    },
  },
  getters: {
    info(state) {
      return state.info;
    },
  },
})
