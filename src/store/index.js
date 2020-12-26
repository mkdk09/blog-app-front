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
    },
    ADD_BLOG(state, blog) {
      const blogs = state.blogs.concat(blog)
      state.blogs = blogs
    },
    EDIT_BLOG(state, blog) {
      state.blogs.forEach(blogId => {
        if (blogId.id === blog.id) {
          blogId = blog
        }
      })
    }
  },
  actions: {
    async fetchBlogs({ commit }) {
      await axios().get('/blogs')
        .then(res => {
          commit('FETCH_BLOGS', res.data)
        }) 
        .catch(e => console.log(e))
    },
    async addBlog({ commit }, blog) {
      const res = await axios().post('/blogs', blog)
      const savedBlog = res.data
      commit('ADD_BLOG', savedBlog)
      return savedBlog
    },
    async editBlog({ commit }, blog) { 
      const res = await axios().put(`/blogs/${blog.id}`, blog)
      const editedBlog = res.data
      commit('EDIT_BLOG', editedBlog)
      return editedBlog
    }
  }
})
