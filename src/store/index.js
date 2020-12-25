import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/api/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blogs: []
  },
  mutations: {
    FETCH_BLOGS(state, blogs) {
      state.blogs = blogs
    }
  },
  actions: {
    async fetchBlogs({ commit }) {
      await axios().get('/blogs')
        .then(res => {
          commit('FETCH_BLOGS', res.data)
        }) 
        .catch(e => console.log(e))
    }
  }
})
