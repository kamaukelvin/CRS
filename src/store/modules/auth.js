// import axios from "axios";

const state = {
  user: null,
};

const getters = {

   // gets whether we are authenticated or not by checking for user
  isAuthenticated: (state) => state.user,

  // get the user details
  StateUser: (state) => state.user,
};

const actions = {

  async LogIn({commit}, user) {
      console.log("the user passed down", user)
    //   endpoint is login, the user is the object containing username and password
  // const response = await axios.post("login", user);
    // sessionStorage.setItem('TOKEN',response.data.token)
    await commit("setUser" //resposne.data.user_details);
    )
  },


  async LogOut({ commit }) {
    let user = null;
    commit("logout", user);
  },
};

const mutations = {
  setUser(state, user_details) {
    state.user = user_details;
  },

  logout(state, user) {
    state.user = user;
  },
};

export default {
    state,
    getters,
    actions,
    mutations,
  };