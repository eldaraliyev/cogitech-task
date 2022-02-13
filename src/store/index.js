import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      posts: [],
      authors: [],
    }
  },
  getters: {
    handlePosts(state) {
      return state.posts
    },
    handleAuthors(state) {
      return state.authors
    },
    /*  handleFilteredPosts(state) {
       return state.filterPosts
     } */
  },
  mutations: {
    setPosts(state, payload) {
      state.posts = payload
    },
    setAuthors(state, payload) {
      state.authors = payload
    },
    /* filterPosts(state, payload) {
      const posts = state.posts
        //console.log(posts.filter(item => item.userId === payload))
      state.filterPosts = posts.filter(item => item.userId === payload)

    }, */
    removePost(state, payload) {
      const posts = state.posts
      const target = posts.findIndex(item => item.id === payload)
      posts.splice(target, 1)
    }
  },
  actions: {
    async fetchPosts(context) {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const resData = await response.json()
      context.commit('setPosts', resData)
        //console.log(resData);
    },
    async fetchAuthors(context) {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const resData = await response.json()
      const authors = Array.from(resData, author => author.username)
      context.commit('setAuthors', authors)
        //console.log(authors);
    },
    removePost(context, payload) {
      context.commit('removePost', payload)
    },
    /* filterPosts(context, payload) {
      context.commit('filterPosts', payload)
    } */
  },
})