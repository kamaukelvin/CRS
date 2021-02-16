 import axios from "axios";

const state = {
  result:{}
};

const getters = {
  getKeyword: (state) => state.keyword,
};

const actions = {

  async Search({commit}, inputText) {
      console.log("text from search", inputText);
       const response = await axios.post("search", inputText);
     commit("setResult",response.data);
  },
};

const mutations = {
  setResult(state, data) {
    state.result = data;
  }
};

export default {
    state,
    getters,
    actions,
    mutations,
  };