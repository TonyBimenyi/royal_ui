// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    url:'https://seesternconsulting.com/royal/ajax.php?token=b5178d23b8ad8ffb9a711fef4da57b9b&action=',
    formData: {
      // Initialize your form data here
 
    },
    points:{},
    user:null,  
    promos:[],  
  },
  mutations: {
    updatePoints(state, points) {
      state.points = points;
    },
    updateFormData(state, payload) {
      state.formData = { ...state.formData, ...payload }
    },
    login(state, user) {
        state.user = user;
        localStorage.setItem('user', state.user);
        //  window.location.href = "/" 
      },
      logout(state) {
        state.user = '';
        localStorage.removeItem('user');
        
    },
      initializeStore(state) {
        if(localStorage.getItem('user')){
            state.user = JSON.parse(localStorage.getItem('user'));
        }else{
           this.commit("logout");
        }
      }
  },
  actions:{
    updateFormData({ commit }, payload) {
      commit('updateFormData', payload)
    }
  },
  getters: {
    formData: state => state.formData,
    user : state =>{
      if(state.user === null){
          return JSON.parse(localStorage.getItem('user'))
      }
      return state.user
    },
    token: (state, getters) => {
        return getters.user?.token;
      }
  },
});
