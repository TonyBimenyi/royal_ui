// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    formData: {
      // Initialize your form data here
      Fname: '',
      Lname: '',
      password: '',
      confirm_pass: '',
      phone: '',
    },
    user:null,  
    promos:[],
  },
  mutations: {
    updateFormData(state, formData) {
      state.formData = formData;
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
  getters: {
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